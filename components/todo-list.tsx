"use client"

import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

export function ToDoList() {
    const toDoListData = [
        {
            id: crypto.randomUUID(),
            desc : "build a blog",
            status : "build", //build/finish
            sub_task : [
                {
                    id: crypto.randomUUID(),
                    desc : "create a to-do list",
                    status : "build", //build/finish
                    sub_task : []
                },
                {
                    id: crypto.randomUUID(),
                    desc : "create a death-count-down clock",
                    status : "build", //build/finish
                    sub_task : []
                },
                {
                    id: crypto.randomUUID(),
                    desc : "create a gym plan",
                    status : "build", //build/finish
                    sub_task : []
                },
                {
                    id: crypto.randomUUID(),
                    desc : "create a live-share functionality",
                    status : "build", //build/finish
                    sub_task : []
                },
                {
                    id: crypto.randomUUID(),
                    desc : "create a gather-experience functionality",
                    status : "build", //build/finish
                    sub_task : []
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            desc : "travel around world",
            status : "build", //build/finish
            sub_task : []
        }
    ]

    return (
        <Accordion type="single" collapsible className="w-full">
            {toDoListData.map(task=>(
                <AccordionItem key={task.id} value={task.id}>
                    <AccordionTrigger>
                        <div className="flex flex-row w-full items-center">
                            <p className="basis-1/6 flex justify-start">
                                {task.desc}
                            </p>
                            <Progress value={33} className="grow"/>
                            <p className="basis-1/12">
                                {33}%
                            </p>
                        </div>
                    </AccordionTrigger>
                    {task.sub_task.map(subTask=>(
                        <AccordionContent key={subTask.id}>
                            {subTask.desc}
                        </AccordionContent>
                    ))}
                </AccordionItem>
            ))}
        </Accordion>
    )
}