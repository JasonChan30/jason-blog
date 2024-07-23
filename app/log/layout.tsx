"use client"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import * as React from "react";
import {Nav,NavLink} from "./components/nav"
import {
    Archive,
    ArchiveX,
    File,
    Inbox,
    Send,
    Trash2,
} from "lucide-react"
import {TooltipProvider} from "@/components/ui/tooltip"

const data : NavLink[] = [
    {
        title: "Inbox",
        label: "128",
        icon: Inbox,
            variant: "default",
    },
    {
        title: "Drafts",
        label: "9",
        icon: File,
        variant: "default",
    },
    {
        title: "Sent",
        label: "",
        icon: Send,
        variant: "ghost",
    },
    {
        title: "Junk",
        label: "23",
        icon: ArchiveX,
        variant: "ghost",
    },
    {
        title: "Trash",
        label: "",
        icon: Trash2,
        variant: "ghost",
    },
    {
        title: "Archive",
        label: "",
        icon: Archive,
        variant: "ghost",
    },
];

export default function Layout({children,}: {children: React.ReactNode }) {

    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return <div className="m-4 border-2 rounded-lg">
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup direction="horizontal" className="py-4">
                <ResizablePanel className="px-4" defaultSize={15} minSize={5} collapsible={true} collapsedSize={4} onCollapse={() => {
                    !isCollapsed && setIsCollapsed(true);
                }} onExpand={()=>{
                    isCollapsed && setIsCollapsed(false);
                }}>
                    <Nav
                        isCollapsed={isCollapsed}
                        links={data}
                    />
                </ResizablePanel>
                <ResizableHandle/>
                <ResizablePanel defaultSize={85} className="px-4">
                    {children}
                </ResizablePanel>
                <ResizableHandle/>
            </ResizablePanelGroup>
        </TooltipProvider>
    </div>
}
