import { Task, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Task[]> {
    // Fetch data from your API here.
    return [
        {
            id : getId(),
            task: "TASK-8782",
            title: "You can't compress the program without quantifying the open-source SSD pixed, and bla bla bla.",
            status: "pending",
            email: "m@example.com",
        },
    ]
}

function getId() {
    const uuid = crypto.randomUUID();
    return uuid.split("-")[0];
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
