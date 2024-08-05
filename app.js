const express = require("express")
const app  = express()
require("dotenv").config()
app.use(express.json())
const handleSearch = require("./controllers/handleSearch")

const PORT = process.env.PORT

app.use("*",handleSearch)


app.listen(PORT,()=>{
    console.log("Gateway running at port "+PORT)
})