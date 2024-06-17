'use client'

import * as React from 'react';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Dictionary from '@/components/ui/dictionary/dictionary';

export default function Home() {

    return <div className="container my-2">
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={20}>
                <Dictionary/>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={80}>
                right
            </ResizablePanel>
            <ResizableHandle />
        </ResizablePanelGroup>
    </div>
}
