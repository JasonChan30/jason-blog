import { Task, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Task[]> {
    // Fetch data from your API here.
    return [
        {
            id : getId(),
            task: "TASK-8782",
            title: "You can't compress the program without quantifying the open-source SSD pixed, and bla bla bla.",
            status: "In Progress",
            priority: "Medium",
            tags: ["Documentation"]
        },
        {
            id : getId(),
            task: "TASK-7878",
            title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
            status: "Backlog",
            priority: "Medium",
            tags: ["Documentation"]
        },
        {
            id : getId(),
            task: "TASK-7839",
            title: "We need to bypass the neural TCP card!",
            status: "Todo",
            priority: "High",
            tags: ["Bug"]
        },
        {
            id : getId(),
            task: "TASK-5562",
            title: "The SAS interface is down, bypass the open-source pixel so we can back up",
            status: "Backlog",
            priority: "Medium",
            tags: ["Feature"]
        },
        {
            id : getId(),
            task: "TASK-8686",
            title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
            status: "Canceled",
            priority: "Medium",
            tags: ["Feature"]
        },
        {
            id : getId(),
            task: "TASK-1280",
            title: "Use the digital TLS panel, then you can transmit the haptic system!",
            status: "Done",
            priority: "High",
            tags: ["Bug"]
        },
        {
            id : getId(),
            task: "TASK-7262",
            title: "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
            status: "Done",
            priority: "High",
            tags: ["Feature"]
        },
        {
            id : getId(),
            task: "TASK-1138",
            title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP b",
            status: "In Progress",
            priority: "Medium",
            tags: ["Feature"]
        },
        {
            id : getId(),
            task: "TASK-7184",
            title: "We need to program the back-end THX pixel!",
            status: "Todo",
            priority: "Low",
            tags: ["Feature"]
        },
        {
            id : getId(),
            task: "TASK-5160",
            title: "Calculating the bus won't do anything, we need to navigate the back-end JSON prot",
            status: "In Progress",
            priority: "High",
            tags: ["Documentation"]
        },
        {
            id : getId(),
            task: "TASK-5618",
            title: "Generating the driver won't do anything, we need to index the online SSL application!",
            status: "Done",
            priority: "Medium",
            tags: ["Documentation"]
        }
    ]
}

function getId() {
    const uuid = crypto.randomUUID();
    return uuid.split("-")[0];
}

export default async function Page() {
    const data = await getData()

    return (
        <DataTable columns={columns} data={data} />
    )
}
