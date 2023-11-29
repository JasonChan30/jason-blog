'use client'

import * as React from "react"
import { Icons } from '@/components/icons'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import {SidebarNav} from '@/components/sidebar-nav'
import {UserAvatar} from '@/components/login/user-avatar'
import {ThemeToggle} from '@/components/theme-toggle'

const sidebarNavItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Sports",
        href: "/sports",
    },
]

export default function SiteHeader (){
    return (
        <>
            <header className="container flex flex-row h-14 items-center sticky top-0 z-50 w-full">
                <div className="flex flex-row items-center justify-start w-6/12">
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="flex flex-row items-center">
                                <Icons.logo className="h-4 w-4 mr-2"/>
                                <span className="mr-6 font-bold">Jason's Blog</span>
                            </div>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>
                                    <Icons.logo className="h-4 w-4 mr-2"/>
                                </SheetTitle>
                            </SheetHeader>
                            <Separator className="my-2"/>
                            <aside>
                                <SidebarNav items={sidebarNavItems} />
                            </aside>
                            <SheetClose/>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex flex-row items-center justify-end w-6/12">
                    <UserAvatar/>
                    <ThemeToggle/>
                </div>
            </header>
           <Separator/>
        </>
    );
}