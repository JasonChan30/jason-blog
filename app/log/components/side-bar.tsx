'use client'

import * as React from 'react'
import { ChevronRight,ChevronDown } from "lucide-react"
import Link from 'next/link'

const items = [
    {
        title: "A",
        href: "/log/a",
        subItems : [
            {
                title : "A1",
                href: "/log/a/a1",
            },
            {
                title : "A2",
                href: "/log/a/a2",
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

export default function SideBar() {
    const [itemState, setItemState] = React.useState<ItemState[]>(items.map(item => !!item.subItems ? ItemState.Fold : ItemState.Disable));

    // @ts-ignore
    return <div className="w-full h-48 overflow-y-auto">
        {items.map((item,index) =>
            <div className="my-1.5 mx-2" key={"Item-" + index}>
                <Link href={item.href || ""} className="flex flex-row justify-between items-center" onClick={() => {
                    if(itemState[index] === ItemState.Disable){
                        return;
                    }
                    const nextState = itemState[index] === ItemState.Fold ? ItemState.Expand : ItemState.Fold;
                    const newItemState = itemState.toSpliced(index, 1, nextState);
                    setItemState(newItemState);
                }}>
                    {item.title}
                    {itemState[index] === ItemState.Fold && <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200"/> }
                    {itemState[index] === ItemState.Expand && <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>}
                </Link>


                {itemState[index] === ItemState.Expand && (
                    <ul className="border-l-2 pl-2">
                        {
                            item.subItems?.map((subItem, subItemIndex) => (
                                <Link href={subItem.href || ""} >
                                    <li key={"SubItem-" + index + subItemIndex}>
                                        {subItem.title}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                )}
            </div>
        )}
    </div>
}
