"use client"

import * as React from "react"
import { Accordion } from "@/components/ui/accordion"
import { Todo } from "@/components/todo/todo"

export enum TaskState {
    BUILD = "build",
    FINISH = "finish"
}

export type TaskData = {
    id: string,
    title: string,
    state: TaskState.BUILD | TaskState.FINISH,
    subTask: TaskData[]
}

const toDoListData: TaskData[] = [
    {
        id: crypto.randomUUID(),
        title: "build a blog",
        state: TaskState.BUILD,
        subTask: [
            {
                id: crypto.randomUUID(),
                title: "create a to-do list",
                state: TaskState.BUILD,
                subTask: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a death-count-down clock",
                state: TaskState.BUILD,
                subTask: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a gym plan",
                state: TaskState.BUILD,
                subTask: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a live-share functionality",
                state: TaskState.BUILD,
                subTask: []
            },
            {
                id: crypto.randomUUID(),
                title: "create a gather-experience functionality",
                state: TaskState.BUILD,
                subTask: []
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "travel around world",
        state: TaskState.BUILD,
        subTask: []
    }
]

export function ToDoList() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {toDoListData.map(task => {
                return (
                    <Todo task={task} />
                )
            })}
        </Accordion>
    )
}