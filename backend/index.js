const express = require("express")
const cors = require("cors")
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();


app.use(express.json())
app.use(cors())
app.use('/api', require("./routes/CreateUser"))
app.use('/api',require("./routes/DisplayData"))
app.use("/api",require("./routes/OrderData"))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"

    )
    next();
})

app.get("/", (req, res) => {
    res.send(`hellow Worlddu`)
})
app.listen(port, () => {
    console.log(`Example app listen on ${port}`)
})