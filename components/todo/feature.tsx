'use client'

import { TaskData,TaskState } from '@/components/todo/todoList'
import { SubTask } from '@/components/todo/subTask'
import { AccordionTrigger,AccordionContent } from '@/components/ui/accordion'
import { Progress } from '@/components/ui/progress'
import * as React from 'react'

interface FeaturePros {
    task: TaskData
}

export function Feature({ task }: FeaturePros) {

    const [processRate, setProcessRate] = React.useState<number>(calcProcessRate(task.subTasks));

    const [subTasks, setSubTasks] = React.useState<TaskData[]>(task.subTasks);

    function handleSubTaskCheckBoxClick(subTaskId : string) {
        console.log(subTaskId);
        subTasks.forEach((subTask) => {
            if(subTask.id === subTaskId){
                subTask.state = subTask.state === TaskState.BUILD ? TaskState.FINISH : TaskState.BUILD;
            }
        });

        setSubTasks(subTasks);
        setProcessRate(calcProcessRate(subTasks));

        console.log(subTasks);
        console.log(processRate);
    }

    function calcProcessRate (subTasks : TaskData[]) {
        const totalNum = subTasks.length;
        if (totalNum === 0 ) {
            return 0;
        }
        
        const finishNum = subTasks.filter(subTask => subTask.state === TaskState.FINISH).length;
        return finishNum / totalNum * 100;
    }

    return (
        <>
            <AccordionTrigger>
                <div className="flex flex-row w-full items-center">
                    <p className="basis-1/6 flex justify-start text-left">
                        {task.title}
                    </p>
                    <Progress value={processRate} className="grow" />
                    <p className="basis-1/12">
                        {processRate}%
                    </p>
                </div>
            </AccordionTrigger>
            {subTasks?.map(subTask => (
                <AccordionContent key={subTask.id}>
                    <SubTask subTask={subTask} handleSubTaskCheckBoxClick={()=>handleSubTaskCheckBoxClick(subTask.id)}/>
                </AccordionContent>
            ))}
        </>
    );
}