"use client"

import {useState} from "react"
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {TaskState, Task} from "./todo-list";

export function Feature(task : Task){

    const [subTaskList, setSubTaskList] = useState<Task[]> (task.subTask??[]);

    const [processRate, setProcessRate] = useState<number> (calcProcessRate(subTaskList.map(subTask=>subTask.state)));

    function calcProcessRate (taskStateList : String[]) {
        const finishTaskNum = taskStateList.filter(state=>state === TaskState.FINISH).length;
        return finishTaskNum === 0 ? 0 : Math.round (finishTaskNum / taskStateList.length);
    }

    function onSubTaskCheckBoxClick (taskId : string){
        subTaskList.forEach(subTask=>{
            if (subTask.id === taskId){
                subTask.state = subTask.state === TaskState.FINISH ? TaskState.BUILD : TaskState.FINISH;
            }
        });
        setSubTaskList(subTaskList);
        setProcessRate(calcProcessRate(subTaskList.map(subTask=>subTask.state)));
    }

    return (
        <AccordionItem key={task.id} value={task.id}>
            <AccordionTrigger>
                <div className="flex flex-row w-full items-center">
                    <p className="basis-1/6 flex justify-start">
                        {task.title}
                    </p>
                    <Progress value={processRate} className="grow"/>
                    <p className="basis-1/12">
                        {processRate}%
                    </p>
                </div>
            </AccordionTrigger>
            {task.subTask?.map(subTask=>(
                <AccordionContent key={subTask.id}>
                    <div className="flex flex-row space-x-2 items-center justify-start">
                        <Checkbox checked={subTask.state === 'finish'} onSubTaskCheckBoxClick={onSubTaskCheckBoxClick(subTask.id)}/>
                        <div>{subTask.title}</div>
                    </div>
                </AccordionContent>
            ))}
        </AccordionItem>
    );
}