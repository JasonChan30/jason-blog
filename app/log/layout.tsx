import SideHeader from '@/components/site-header'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Dictionary from '@/components/ui/dictionary/dictionary';
import * as React from "react";

export default function RootLayout({children,}: {children: React.ReactNode }) {
    return <div>
        <SideHeader/>
        <div className="m-4">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={15}>
                    <Dictionary/>
                </ResizablePanel>
                <ResizableHandle/>
                <ResizablePanel defaultSize={75}>
                    {children}
                </ResizablePanel>
                <ResizableHandle/>
            </ResizablePanelGroup>
        </div>
    </div>
}
