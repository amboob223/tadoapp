const ListHeader = ({ listname }) => {
    const signOut = () => {
        console.log("sign out")
    }

    return (<div className="list-header">
        <h1>{listname}</h1>
        <div className="btnC">
            <button className="create">SignUP</button>
            <button className="signOut" onClick={signOut}>signOut</button>
        </div>
    </div>)
}

export default ListHeader;