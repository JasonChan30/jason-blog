'use client'

import * as React from 'react';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Dictionary from '@/components/ui/dictionary/dictionary';

export default function Home() {

    return <div className="m-4">
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={15}>
                <Dictionary/>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
                right
            </ResizablePanel>
            <ResizableHandle />
        </ResizablePanelGroup>
    </div>
}
