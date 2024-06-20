'use client'

import * as React from 'react';
import { ChevronRight,ChevronDown } from "lucide-react"
import {useState} from "react";

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
    const [state, setState] = React.useState(true);

    return <div className="w-full h-48 bg-amber-200 overflow-y-auto">
        <div className="my-1.5 mx-2">
            <div className="flex flex-row justify-between items-center">
                A
                {state && (<ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" onClick={() => {
                    setState(false);
                }}/>)}

                {!state && ( <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" onClick={() => {
                    setState(true);
                }}/>)}
            </div>

            {!state && (<ul className="border-l-2 pl-2">
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
            </ul>)}
        </div>
        <div className="my-1.5 mx-2">
            <div className="flex flex-row justify-between items-center">
                B
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>
            </div>
            <ul className="border-l-2 pl-2">
                <li>B</li>
                <li>B</li>
                <li>B</li>
                <li>B</li>
                <li>B</li>
                <li>B</li>
            </ul>
        </div>
    </div>
}
