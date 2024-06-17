'use client'

import * as React from 'react';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Dictionary from '@/components/ui/dictionary/dictionary';

export default function Home() {

    return <>
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
                <Dictionary/>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
                right
            </ResizablePanel>
            <ResizableHandle />
        </ResizablePanelGroup>
    </>
}
