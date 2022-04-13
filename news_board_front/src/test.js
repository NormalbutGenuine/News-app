const axios = require("axios")
const express = require("express")
const cors = require('cors');

const app = express()
app.use(cors());

let sample_data = [
    {
        first: "ONE",
        second: "TWO",
        third: "THREE"
    },
    {
        first: "tell me",
        second: "Jinusean",
        third: "1998"
    },
    {
        first: "Love is...",
        second: "Turbo",
        third: "1996"
    }
]

app.get("/go", (req, res) => {
    console.log(req)
    res.json(sample_data)
})

app.listen(3050, () => {
    console.log("3050 ON")
})