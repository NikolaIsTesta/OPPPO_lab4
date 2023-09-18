const filePath = "../task-list.txt"

const getFile = async (filePath) => {
    return await fetch(filePath)
        .then((response) => response.text())
        .then((file) => {return file})
        .catch(console.error)
}
export async function getTask() {
    const file = await getFile(filePath)
    const lines = file.split(/\r?\n/)
    let task = []

    for (const line of lines) {
        let [command, ...parameters] = line.split(/\s/)

        task.push({
            "command" : command, 
            "parameters" : parameters
        })
    }
    return task
}