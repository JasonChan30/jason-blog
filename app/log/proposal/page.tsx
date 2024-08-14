'use client'

import * as React from 'react';
import TodoProposal from "./component/todo-proposal"

const todoList : GroupedTodo[] = [
    {
        category : "生活",
        todoSummaries : [
            {
                id : "1",
                title : "出租房生活条件",
            },
            {
                id : "2",
                title : "改善卫生条件",
            },
            {
                id : "3",
                title : "驱虫",
            }
        ],
    },
    {
        category : "A",
        todoSummaries : [
            {
                id : "33",
                title : "test1",
            },
            {
                id : "4",
                title : "test2",
            },
        ]
    },
    {
        category : "B",
        todoSummaries : [
            {
                id : "5",
                title : "testA",
            },
            {
                id : "6",
                title : "testB",
            },
            {
                id : "7",
                title : "testC",
            },
            {
                id : "8",
                title : "testD",
            },
            {
                id : "9",
                title : "testE",
            },
        ]
    },

]

type GroupedTodo = {
    category : string,
    todoSummaries : TodoSummary[]
}

type TodoSummary = {
    id : string,
    title : string
}

export default function Page() {

    const [pressedId, setPressedId] = React.useState("");

    return <div className="flex flex-row">
        <div className="relative w-1/4 overflow-y-auto flex flex-col gap-4 pr-4 h-[20rem]">
            {todoList.map((group, groupIndex) => (
                <div className="flex flex-col gap-1 mb-2" key={groupIndex}>
                    <div className="sticky top-0 backdrop-blur-sm font-bold">
                        {group.category}
                    </div>
                    {group.todoSummaries.map((data)  => (
                        <div aria-pressed={pressedId === data.id}
                             key={data.id}
                             className="flex items-center border p-3 text-left rounded-lg aria-pressed:bg-accent text-xs font-medium"
                             onClick={()=>{
                                 setPressedId(data.id);
                             }
                        }>
                            {data.title}
                        </div>
                    ))}
                </div>
            ))}
        </div>
        <div className="border-l-2 pl-4 w-3/4">
            <TodoProposal todoId={pressedId}/>
        </div>
    </div>
}
