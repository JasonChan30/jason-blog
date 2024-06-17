'use client'

import * as React from 'react';
import { ChevronDown } from "lucide-react"

const data = [
    {
        title: "A",
        subArticles : [
            {
                title : "A1"
            },
            {
                title : "A2"
            },
        ]
    },
    {
        title : "B",
        subArticles : []
    }
]


export default function Dictionary() {

    return <div className="w-full h-48 bg-amber-200 overflow-y-auto">
        <div className="flex flex-row justify-between items-center">
            A
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </div>

        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
    </div>
}
