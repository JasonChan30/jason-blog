"use client"

import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import AccordionDemo from "@/components/todo-list.feature"

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
        <AccordionDemo/>
    )
}