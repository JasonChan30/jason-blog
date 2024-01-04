'use client'

import * as React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { TaskData, TaskState } from "@/components/todo/todoList"

interface SubTaskPros{
    subTask : TaskData
    handleSubTaskCheckBoxClick : () => void
}

export function SubTask ({subTask, handleSubTaskCheckBoxClick} : SubTaskPros){

    return (
        <div className="flex flex-row space-x-2 items-center justify-start">
            <Checkbox
                checked={subTask.state === TaskState.FINISH}
                onCheckedChange={handleSubTaskCheckBoxClick}
            />
            <div>{subTask.title}</div>
        </div>
    );


}