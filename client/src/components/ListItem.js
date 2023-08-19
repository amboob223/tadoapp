import TickIcon from "../components/TickIcon"
import ProgressBar from "../components/ProgressBar"
const ListItem = ({ tasks }) => {
    return (<div>
        <p>
            <TickIcon />
        </p>
        <ProgressBar />

        <div className="btnC">
            <button className="edit">EDIT</button>
            <button className="delete">DELETE</button>
        </div>
    </div>)
}

export default ListItem;