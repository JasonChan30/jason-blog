'use client'

import * as React from 'react';
import { ChevronRight,ChevronDown } from "lucide-react"

const items = [
    {
        title: "A",
        subItems : [
            {
                title : "A1"
            },
            {
                title : "A2"
            },
        ],
    },
    {
        title : "B",
    },
    {
        title : "C",
        subItems : [
            {
                title : "C1"
            },
            {
                title : "C2"
            },
        ],
    },
    {
        title : "D",
        subItems : [
            {
                title : "D1"
            },
            {
                title : "D2"
            },
        ],
    },
]

enum ItemState {
    Fold,
    Expand,
    Disable
}

export default function Dictionary() {
    const [itemState, setItemState] = React.useState<ItemState[]>(items.map(item => !!item.subItems ? ItemState.Fold : ItemState.Disable));

    return <div className="w-full h-48 bg-amber-200 overflow-y-auto">
        {items.map((item,index) =>
            <div className="my-1.5 mx-2" key={"dictionaryItem-" + index}>

                {itemState[index] === ItemState.Disable ?
                    <div>
                        {item.title}
                    </div> :

                    <div className="flex flex-row justify-between items-center" onClick={() => {
                        const nextState = itemState[index] === ItemState.Fold ? ItemState.Expand : ItemState.Fold;
                        const newItemState = itemState.toSpliced(index, 1, nextState);
                        setItemState(newItemState);
                    }}>
                        {item.title}
                        {itemState[index] === ItemState.Fold ?
                            <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200"/> :
                            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>}
                    </div>
                }

                {itemState[index] === ItemState.Expand && (
                    <ul className="border-l-2 pl-2">
                        {
                            item.subItems?.map(subArticle => (
                                <li>{subArticle.title}</li>))
                        }
                    </ul>
                )}
            </div>
        )}
    </div>
}
