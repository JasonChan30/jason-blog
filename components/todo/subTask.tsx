'use client'

import * as React from 'react'
import {Task, TaskState} from "@/components/todo/todoList"
import {AccordionContent} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

export const SubTask = ({subTask, handleClickSubTaskCheckBox} : {subTask : Task, handleClickSubTaskCheckBox : (subTask : Task) => void}) => {
    return (
        <AccordionContent key={subTask.id}>
            <div className="flex flex-row space-x-2 items-center justify-start">
                <Checkbox checked={subTask.state === TaskState.FINISH} onCheckedChange={()=>handleClickSubTaskCheckBox(subTask)}/>
                <div>{subTask.title}</div>
            </div>
        </AccordionContent>
    );
}