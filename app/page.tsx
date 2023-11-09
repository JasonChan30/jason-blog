'use client'

import { Icons } from "@/components/icons";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import * as React from 'react';
import { Separator } from "@/components/ui/separator";


const menu = [
    {
        id : self.crypto.randomUUID(),
        categoryName : "Home"
    },
    {
        id : self.crypto.randomUUID(),
        categoryName: "Sport",
    }
]
const menuItems = menu.map((menuItem => {
    return <>
        <li key={menuItem.id}>{menuItem.categoryName}</li>
        <Separator className="my-2"/>
    </>;
}))

export default function Home() {

  return <>
      <div>
          <div className="flex min-h-screen flex-col">
              <div className="sticky top-0 z-50 border-b">
                  <header className="container flex flex-row h-14 items-center">
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
                              <Separator className="my-4"/>
                              <ul>
                                  {menuItems}
                              </ul>
                          </SheetContent>
                      </Sheet>
                  </header>
              </div>
          </div>
      </div>

  </>
}
