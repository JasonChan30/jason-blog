'use client'

import { Icons } from "@/components/icons";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Menu() {
    return (
        <Sheet>
            <SheetTrigger className="flex flex-row items-center">
                <Icons.logo className="h-4 w-4 mr-2"/>
                <span className="mr-6 font-bold">Jason's Blog</span>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}