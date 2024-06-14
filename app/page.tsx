'use client'

import * as React from 'react';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {

    return <>
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
                left
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel>
                        top
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel>
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel>
                                left
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel>
                                right
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
                right
            </ResizablePanel>
        </ResizablePanelGroup>
    </>
}
