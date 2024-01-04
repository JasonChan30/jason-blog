"use client"

import * as React from "react"
import { Accordion,AccordionItem } from "@/components/ui/accordion"
import { Feature } from "@/components/todo/feature"

export enum TaskState {
    BUILD = "build",
    FINISH = "finish"
}

export type TaskData = {
    id: string,
    title: string,
    state: TaskState.BUILD | TaskState.FINISH,
    subTasks: TaskData[]
}

const toDoListData: TaskData[] = [
    {
        id: crypto.randomUUID(),
        title: "build a blog",
        state: TaskState.BUILD,
        subTasks: [
            {
                id: crypto.randomUUID(),
                title: "create a to-do list",
                state: TaskState.FINISH,
                subTasks: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a death-count-down clock",
                state: TaskState.BUILD,
                subTasks: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a gym plan",
                state: TaskState.BUILD,
                subTasks: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a live-share functionality",
                state: TaskState.BUILD,
                subTasks: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a gather-experience functionality",
                state: TaskState.BUILD,
                subTasks: []
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "travel around world",
        state: TaskState.BUILD,
        subTasks: []
    }
]

export function ToDoList() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {toDoListData.map(task => {
                return (
                    <AccordionItem key={task.id} value={task.id}>
                        <Feature  task={task}/>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}