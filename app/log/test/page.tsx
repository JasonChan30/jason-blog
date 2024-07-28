'use client'

import * as React from 'react';
import  {GroupList, GroupListData} from "./component/group-list";

const groupTests : GroupListData[] = [
    {
        category : "生活",
        list : [
            {
                id : "1",
                title : "消除霉菌测试",
            },
            {
                id : "2",
                title : "除湿测试",
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


export default function Page() {

    return <div className="flex flex-row">
        <div className="relative w-1/4 overflow-y-auto flex flex-col gap-4 px-2">
            <GroupList data={groupTests}/>
        </div>
        <div className="border-l-2 pl-4">
            qwe
        </div>
    </div>
}
