const mongoose=require("mongoose")

require('dotenv').config()
const connection=mongoose.connect(process.env.URL)


const bookSchema=mongoose.Schema({
    title: {type:String,required:true},
  author: {type:String,required:true},
  genre: {type:String,required:true},
},{
    versionKey:false
})

const BookModel=mongoose.model("book",bookSchema)

module.exports={
    connection,
    BookModel
}