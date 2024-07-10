"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"

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
        header: "Priority",
    },
]
