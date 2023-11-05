'use client'

import { Menu } from "@/components/menu";

export default function Home() {

  return <>
      <div>
          <div className="flex min-h-screen flex-col">
              <div className="sticky top-0 z-50 border-b">
                  <header className="container flex flex-row h-14 items-center">
                    <Menu/>
                  </header>
              </div>
          </div>
      </div>

  </>
}
