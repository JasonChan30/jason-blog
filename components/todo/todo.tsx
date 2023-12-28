"use client"

import * as React from "react"
import {AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {Task, TaskState} from "@/components/todo/todoList"
import {SubTask} from "@/components/todo/SubTask"
import {Feature} from "@/components/todo/Feature"

export const Todo = function ({task} : {task:Task}) {

    const [subTaskList, setSubTaskList] = React.useState<Task[]> (task.subTask??[]);

    const [processRate, setProcessRate] = React.useState<number> (calcProcessRate(subTaskList.map(subTask=>subTask.state)));

    React.useEffect(()=>{
        setProcessRate(calcProcessRate(subTaskList));
    },[subTaskList]);

    function calcProcessRate (taskStateList : String[]) {
        const finishTaskNum = taskStateList.filter(state=>state === TaskState.FINISH).length;
        return finishTaskNum === 0 ? 0 : Math.round (finishTaskNum / taskStateList.length);
    }

    function handleClickSubTaskCheckBox (nextTask : Task) {
        setSubTaskList(subTaskList.map(subTask=>subTask.id === nextTask.id ? nextTask : subTask));
    }

    return (
        <AccordionItem>
            <AccordionTrigger>
                <Feature title={task.title} processRate={processRate}/>
            </AccordionTrigger>
            {subTaskList.map(subTask=>{
                <div key={subTask.id} value={subTask.id}>
                    <SubTask subTask={subTask} handleClickSubTaskCheckBox={handleClickSubTaskCheckBox}/>
                </div>
            })}
        </AccordionItem>
    );
}