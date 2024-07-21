import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import * as React from "react";
import SideBar from "./components/side-bar"

export default function Layout({children,}: {children: React.ReactNode }) {
    return <div className="m-4">
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={15}>
                <div>
                    <SideBar/>
                </div>
            </ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel defaultSize={75}>
                {children}
            </ResizablePanel>
            <ResizableHandle/>
        </ResizablePanelGroup>
    </div>
}
