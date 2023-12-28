"use client"

import * as React from 'react'
import { Progress } from "@/components/ui/progress"

export const Feature = ({title, processRate} : {title : string, processRate : number}) => {
    return (
        <div className="flex flex-row w-full items-center">
            <p className="basis-1/6 flex justify-start">
                {title}
            </p>
            <Progress value={processRate} className="grow"/>
            <p className="basis-1/12">
                {processRate}%
            </p>
        </div>
    );
}
