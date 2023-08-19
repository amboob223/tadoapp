import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react"
import ListItem from "./components/ListItem"
const userEmail = "mon6@gmaik.com"

const App = () => {
    const [tasks, setTasks] = useState(null)


    const getData = async () => {

        try {
            const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
            const json = await response.json()
            setTasks(json)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getData()

    }, []// this is an empty dependncy [] if we didnt put we would get an infinte loop its like e.prevent defaukt
    )
    console.log(tasks)

    const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))
    return (<div>
        <h1><ListHeader listname={"holiday tick list"} /></h1>
        {sortedTasks?.map((task) => < ListItem key={task.id} task={task} />)}
    </div>)
}


export default App;