"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal,ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Task = {
    id: string
    task: string
    title: string
    status: "Backlog" | "Todo" | "In Progress" | "Done" | "Canceled"
    priority : "High" | "Medium" | "Low"
    tags: string[]
}

export const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "task",
        header: "Task",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "priority",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Priority
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        sortingFn: (rowA, rowB, columnId) => {
            const transToPriorityNumber = (priorityStr: string) => {
                if(priorityStr === "High"){
                    return 0;
                }
                if(priorityStr === "Medium"){
                    return 1;
                }
                return 2;
            }
            const priorityA = transToPriorityNumber(rowA.original.priority);
            const priorityB = transToPriorityNumber(rowB.original.priority);
            return priorityA - priorityB;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const task = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(task.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
