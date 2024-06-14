'use client'

import * as React from "react"
import { Separator } from '@/components/ui/separator'
import {UserAvatar} from '@/components/login/user-avatar'
import {ThemeToggle} from '@/components/theme-toggle'

export default function SiteHeader (){
    return (
        <>
            <header className="container flex flex-row items-center sticky top-0 z-50 w-full bg-white my-2">
                <div className="flex flex-row items-center justify-start w-6/12">
                    <span className="mr-6 font-bold">Jason's Blog</span>
                </div>
                <div className="flex flex-row items-center justify-end w-6/12 space-x-2">
                    <UserAvatar/>
                    <ThemeToggle/>
                </div>
            </header>
            <Separator/>
        </>
    );
}