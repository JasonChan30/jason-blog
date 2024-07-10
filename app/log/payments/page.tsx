import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "1",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "3",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "4",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "5",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "6",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "7",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "8",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
