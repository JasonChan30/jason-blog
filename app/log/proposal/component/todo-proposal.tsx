import * as React from 'react';

const todoProposal = {
    id : "1",
    title : "出租房的生活条件",
    description: "我想要一个干燥的,cozy的生活环境.最好还是香香的住宿环境",
    latestVersion : "0",
    latestVersionDetail : {
        description : "我觉得现在住的出租房,湿度跟透气都不太好,导致虫子太多,霉菌疯狂生长,觉得卫生,跟空气质量都不太行",
        wantToDo : [
            {
                id : "1-1",
                benefit : [
                    {
                        id : "1-1-1",
                        title : "降低房间湿度",
                        support : null,
                    },
                    {
                        id : "1-1-2",
                        title : "减轻房间味道",
                        support : null,
                    },
                    {
                        id : "1-1-3",
                        title : "减少房间空气中霉菌孢子的浓度,减少墙面发霉",
                        support : null,
                    }
                ],
                byWhat : "我想用抽风机抽风,加快室内空气循环",
                cost : 0,
                compare : "",
            },
            {
                id : "1-2",
                byWhat : "将隔尘网放到窗户外面",
                benefit : [
                    {
                        id : "1-2-1",
                        title : "减少虫子进入房间(蛾蚋,鼻涕虫,黑皮蠹)",
                        support : null,
                    }
                ],
                cost : 0,
                compare : "",
            },
            {
                id : "1-3",
                byWhat : "塑钢泥填补马桶缝隙",
                benefit : [
                    {
                        id : "1-3-1",
                        title : "降低卫生间整体味道",
                        support : null,
                    },
                    {
                        id : "1-3-2",
                        title : "提高卫生间卫生",
                        support : null
                    }
                ],
                cost : 0,
                compare : ""
            },
            {
                id : "1-4",
                byWhat : "除湿机",
                benefit : [
                    {
                        id : "1-4-1",
                        title : "降低阴暗角落的湿度",
                        support : null
                    }
                ]
            }
        ]
    },
};


//todo feature: support benefit
//todo feature: compare effect
function fetchTodoProposal (todoId : string){
    return todoProposal;
}

interface TodoProposal {
    todoId : string
}

export default function TodoProposal({ todoId }:  TodoProposal) {

    const proposal = fetchTodoProposal(todoId);

    return <div>
        <div className="border-b-2 ">
            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">{proposal.title}</h1>
            <p className="mt-3 text-sm leading-7 text-slate-500">{proposal.description}</p>
        </div>
        <div className="flex flex-col gap-2 mt-2">
        </div>

    </div>
}