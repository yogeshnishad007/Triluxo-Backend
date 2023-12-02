const express = require('express');
const { connection, BookModel } = require("./db")

require("dotenv").config()


const app = express();
app.use(express.json());

//Home Page
app.get("/",(req,res)=>{

    res.send("Home Page ")
})

// Get Books Data
app.get("/books", async (req, res) => {

    try {
        const books = await BookModel.find()
        res.send(books)

    } catch (err) {

        console.log("Not Get books", err)
    }
})


//Register Books Data

app.post("/post", async (req, res) => {
    try {

        const book = new BookModel(req.body)
        await book.save()
        res.send("Succesfull Register")
    } catch (err) {
        console.log(err)
        res.send({ "error": err.message })
    }
})

// Update Books Data

app.put('/update/:Id', async (req, res) => {
    const ID = req.params.Id
    const payload = req.body
    try {
        await BookModel.findByIdAndUpdate({ _id: ID }, payload);
        res.send("Books Updated");
    } catch (err) {
        console.log(err)
        res.send({ "error": err.message })
    }
});


// DELETE a book by ID
app.delete('/delete/:id', async (req, res) => {
    const ID = req.params.id
    try {
        await BookModel.findByIdAndDelete(ID);
        res.send(`Id ${ID} Deleted`)
    } catch (error) {
        console.log(err)
        res.status(500).json({ error: error.message });
    }
});


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("DataBase Connected")
    } catch (err) {
        console.log("DataBase Not Connected")
        console.log(err)

    }
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});