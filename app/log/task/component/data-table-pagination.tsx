import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChevronRight,ChevronLeft,ChevronsRight,ChevronsLeft } from "lucide-react"

interface DataTablePaginationProps<TData> {
    table: Table<TData>
}

export function DataTablePagination<TData>({table}: DataTablePaginationProps<TData>) {
    return (
        <div className="flex items-center justify-end py-4 space-x-6 lg:space-x-8">
            <div className="flex items-center">
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
            </div>
            <p className="text-sm font-medium">Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</p>
            <div>
                <Button variant="outline" size="icon"  onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}