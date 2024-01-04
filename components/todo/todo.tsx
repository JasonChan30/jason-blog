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

    const [todoTask, setTodoTask] = React.useState(task);

    const [processRate, setProcessRate] = React.useState(0);

    function calcProcessRate(taskStateList: String[]) {
        const finishTaskNum = taskStateList.filter(state => state === TaskState.FINISH).length;
        return finishTaskNum === 0 ? 0 : Math.round(finishTaskNum / taskStateList.length);
    }

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