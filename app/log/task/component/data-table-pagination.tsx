import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface DataTablePaginationProps<TData> {
    table: Table<TData>
}

export function DataTablePagination<TData>({table}: DataTablePaginationProps<TData>) {
    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            <p className="text-sm font-medium">Rows per page</p>
            <Select onValueChange={value => {
                table.setPageSize(Number(value))
            }}>
                <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder={table.getState().pagination.pageSize}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="15">15</SelectItem>
                </SelectContent>
            </Select>
            <p className="text-sm font-medium">Page  of </p>
        </div>
    )
}