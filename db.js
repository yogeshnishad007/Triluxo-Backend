const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/booksdata")


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