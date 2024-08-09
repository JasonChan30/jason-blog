import * as React from 'react';

const todoProposal = {
    id : "1",
    title : "去霉菌",
    actions : [
        {
            id : "1-1",
            title : "除湿",
            status : "finish",//init, finish, abort
        },
        {
            id : "1-2",
            title : "使用除霉剂去霉",
            status : "init",//init, finish, abort
        },
    ],
    tests : [
        {
            id : "1-2-1",
            groupType : "除霉剂种类",
            groupData : [
                {
                    id : "1-2-1-1",
                    title : "溶菌除霉剂",
                    data : [
                        {
                            day : "1",
                            moldConcentration : "0"
                        },
                        {
                            day : "2",
                            moldConcentration : "0"
                        },
                        {
                            day : "3",
                            moldConcentration : "0"
                        },
                        {
                            day : "4",
                            moldConcentration : "0"
                        },
                    ]
                },{
                    id : "1-2-1-2",
                    title : "巴氏消毒水",
                    data : [
                        {
                            day : "1",
                            moldConcentration : "0"
                        },
                        {
                            day : "2",
                            moldConcentration : "10"
                        },
                        {
                            day : "3",
                            moldConcentration : "30"
                        },
                        {
                            day : "4",
                            moldConcentration : "100"
                        },
                    ]
                }
            ]
        },
    ],
};

function fetchTodoProposal (todoId : string){
    return todoProposal;
}

interface TodoProposal {
    todoId : string
}

export default function TodoProposal({ todoId }:  TodoProposal) {

    const proposal = fetchTodoProposal(todoId);

    return <div>
        <h1 className="text-4xl font-bold text-slate-900 border-b-2 pb-2">{proposal.title}</h1>
        <div className="flex flex-col gap-2 mt-2">
            {todoProposal.actions.map(action =>
                <div data-status={action.status} className="w-fit px-1 border-2 rounded-lg data-[status=init]:bg-blue-200 data-[status=finish]:bg-green-200 data-[status=abort]:bg-red-200">
                    {action.title}
                </div>
            )}
        </div>

    </div>
}