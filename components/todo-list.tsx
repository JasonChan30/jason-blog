"use client"

import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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

export function ToDoList() {

    return (
        <Accordion type="single" collapsible className="w-full">
            {toDoListData.map(task=>(
                <AccordionItem key={task.id} value={task.id}>
                    <AccordionTrigger>{task.desc}</AccordionTrigger>
                    {task.sub_task.map(subTask=>(
                        <AccordionContent>
                            {subTask.desc}
                        </AccordionContent>
                    ))}
                </AccordionItem>
            ))}
        </Accordion>
    )
}