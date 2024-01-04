'use client'

import {
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

interface FeaturePros {
    title: string,
    processRate: number
}

export function Feature({ title, processRate }: FeaturePros) {

    return (
        <AccordionTrigger>
            <div className="flex flex-row w-full items-center">
                <p className="basis-1/6 flex justify-start">
                    {title}
                </p>
                <Progress value={processRate} className="grow" />
                <p className="basis-1/12">
                    {processRate}%
                </p>
            </div>
        </AccordionTrigger>
    );
}
