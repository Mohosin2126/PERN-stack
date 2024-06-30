const express=require("express")

const app=express()
const PORT =5000
app.use(express.json())

// GET All Books
app.get("/books",(req,res)=>{
    try{
        res.status(200).json({message:"books are return "})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})



// GET single Book

app.get("/books/:id",(req,res)=>{
    try{
        const {id}=req.params
        res.status(200).json({message:"specific books are return with it  ",id})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})


// POST Books








app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(PORT,function(req,res){
    console.log("server is running on port 5000")
})