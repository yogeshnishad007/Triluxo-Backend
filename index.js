const express = require('express');
const {connection,BookModel} =require("./db")



const app = express();
const PORT = 4000;
app.use(express.json());

app.get("/books",async(req,res)=>{

       try{
              const books=await BookModel.find()
              res.send(books)
            
       }catch(err){

           console.log("Not Get books",err)
       }
})







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