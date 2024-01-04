'use client'

import { TaskData, TaskState } from '@/components/todo/todoList'
import { Feature } from '@/components/todo/feature'
import { Task } from '@/components/todo/task'
import { AccordionItem } from "@/components/ui/accordion"
import * as React from 'react'

interface TodoPros {
    task: TaskData
}

export function Todo({ task }: TodoPros) {

    return (
        <AccordionItem value={task.id}>
            <Feature title={task.title} processRate={0} />

            {task.subTask?.map(subTask => (
                <Task
                    subTask={subTask}
                />
            ))}
        </AccordionItem>
    );
}