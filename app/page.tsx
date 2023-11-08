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
import * as React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";


const menu = [
    {
        categoryName : "Home"
    },
    {
        categoryName: "Sport",
    }
]

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
                              <Menubar>
                                  <MenubarMenu>
                                      <MenubarTrigger>Home</MenubarTrigger>
                                      <MenubarContent>
                                          <MenubarItem>
                                              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                          </MenubarItem>
                                          <MenubarItem>New Window</MenubarItem>
                                          <MenubarSeparator />
                                          <MenubarItem>Share</MenubarItem>
                                          <MenubarSeparator />
                                          <MenubarItem>Print</MenubarItem>
                                      </MenubarContent>

                                      <MenubarTrigger>File</MenubarTrigger>
                                      <MenubarContent>
                                          <MenubarItem>
                                              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                          </MenubarItem>
                                          <MenubarItem>New Window</MenubarItem>
                                          <MenubarSeparator />
                                          <MenubarItem>Share</MenubarItem>
                                          <MenubarSeparator />
                                          <MenubarItem>Print</MenubarItem>
                                      </MenubarContent>
                                  </MenubarMenu>
                              </Menubar>
                          </SheetContent>
                      </Sheet>
                  </header>
              </div>
          </div>
      </div>

  </>
}
