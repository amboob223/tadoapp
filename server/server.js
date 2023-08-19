const PORT = process.env.PORT ?? 8000; //?? means or if we cant find
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors())

app.post("/try", async (req, res) => {


    try {
        const { name } = req.body
        const data = await pool.query(
            "INSERT INTO users(name)VALUES($1) RETURNING *", [name]
        )
        res.json(data.rows)
    } catch (error) {
        console.log(error)
    }
})
app.get("/todos/:userEmail", async (req, res) => {

    console.log(req)
    const { userEmail } = req.params
    console.log(userEmail)
    try {
        const todos = await pool.query(
            "SELECT * FROM todos WHERE user_email = $1", [userEmail]
        );
        res.json(todos.rows) // the rows are from the json ojects so it will show in the browser as json
    } catch (error) {
        console.log(error)
    }
})

// app.get("/", (req, res) => {
//     res.send("yurrd")
// })


app.listen(PORT, () => console.log(`server running on ${PORT}`)

)
