'use client'


import * as React from "react";

export type GroupListData = {
    category : string,
    list : DataItem[]
}

type DataItem = {
    id : string,
    title : string
}

interface GroupListProps {
    data : GroupListData[]
}

export function GroupList ({data} : GroupListProps){

    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    return <>
        {data.map((group, index) => (
            <div className="flex flex-col gap-2" key={index}>
                <div className="sticky top-0 backdrop-blur-sm">
                    {group.category}
                </div>
                {group.list.map((data, index)  => (
                    <div data-selected={index === selectedIndex}
                         key={data.id}
                         className="flex items-center border p-3 text-left text-sm rounded-lg data-[selected=true]:bg-accent bg-muted"
                         onClick={()=>{
                            setSelectedIndex(index);
                         }
                    }>
                        {data.title}
                    </div>
                ))}
            </div>
        ))}
    </>
}