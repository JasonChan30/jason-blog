'use client'

import * as React from 'react';

const groupTests : GroupListData[] = [
    {
        category : "live",
        list : [
            {
                id : "1",
                title : "Mold remove test",
            },
            {
                id : "2",
                title : "Make dry test",
            },
        ],
    },
    {
        category : "A",
        list : [
            {
                id : "3",
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
        list : [
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

type GroupListData = {
    category : string,
    list : DataItem[]
}

type DataItem = {
    id : string,
    title : string
}

export default function Page() {

    const [pressedId, setPressedId] = React.useState("");

    return <div className="flex flex-row">
        <div className="relative w-1/4 overflow-y-auto flex flex-col gap-4 pr-4 h-[20rem]">
            {groupTests.map((group, groupIndex) => (
                <div className="flex flex-col gap-1 mb-2" key={groupIndex}>
                    <div className="sticky top-0 backdrop-blur-sm font-medium">
                        {group.category}
                    </div>
                    {group.list.map((data)  => (
                        <div aria-pressed={pressedId === data.id}
                             key={data.id}
                             className="flex items-center border p-3 text-left rounded-lg aria-pressed:bg-accent text-sm"
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
        <div className="border-l-2 pl-4">
            qwe
        </div>
    </div>
}
