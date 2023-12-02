const express = require('express');
const {connection,BookModel} =require("./db")



const app = express();
const PORT = 4000;
app.use(express.json());


// Get Books Data
app.get("/books",async(req,res)=>{

       try{
              const books=await BookModel.find()
              res.send(books)
            
       }catch(err){

           console.log("Not Get books",err)
       }
})


//Register Books Data

app.post("/post", async (req,res)=>{
    try{

        const book=new BookModel(req.body)
        await book.save()
        res.send("Succesfull Register")
    }catch(err){
         console.log(err)
        res.send({"error":err.message})
    }
})

// Update Books Data

app.put('/update/:Id', async (req, res) => {
     const ID=req.params.Id
     const payload=req.body
    try {
         await BookModel.findByIdAndUpdate({_id:ID},payload);
      res.send("Books Updated");
    } catch (err) {
        console.log(err)
        res.send({"error":err.message})
    }
  });




app.listen(PORT, async() => {
     try{
          await connection
          console.log("DataBase Connected")
     }catch(err){
           console.log("DataBase Not Connected")
           console.log(err)

     }
    console.log(`Server is running on http://localhost:${PORT}`);
  });