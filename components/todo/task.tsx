'use client'

import { TaskData, TaskState } from "./todoList";
import { AccordionContent } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import * as React from 'react'

interface TaskPros {
    subTask: TaskData
}

export function Task({ subTask }: TaskPros) {

    const [state, setState] = React.useState(subTask.state);

    function handleSubTaskCheckBoxClick() {
        setState(state === TaskState.BUILD ? TaskState.FINISH : TaskState.BUILD);
    }

    return (
        <AccordionContent key={subTask.id}>
            <div className="flex flex-row space-x-2 items-center justify-start">
                <Checkbox
                    checked={state === TaskState.FINISH}
                    onCheckedChange={() => { handleSubTaskCheckBoxClick }}
                />
                <div>{subTask.title}</div>
            </div>
        </AccordionContent>
    );
}