const express=require("express")

const app=express()
const PORT =5000
const pool=require("./db")
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

        res.status(200).json({message:"specific books are return with it  ",})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})


// POST Books

// app.post("/books",async (req,res)=>{
//     try{
//         // inserting book data into database
//         const newBook= await pool.query("INSERT INTO book (name,description) VALUES($1,$2) RETURNING *",[name,description])
//   const {name,description}=req.body
//         res.status(201).json({message:"book is created  ",newBook:newBook})
//     }
//     catch(err){
//         res.status(500).send(err.message)
//     }
// })


// Delete

app.delete("/books/:id",(req,res)=>{
    try{
        const {id}=req.params
        res.status(200).json({message:"book is deleted  ",id})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})



// Put
app.put("/books/:id",(req,res)=>{
    try{
      const id=req.params
        res.status(201).json({message:"book is updated  ",id})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})


// CRUD operation in postgresql

// POST Books

app.post("/books", async (req, res) => {
    const { name, description } = req.body; // Define name and description here

    try {
        // inserting book data into database
        const newBook = await pool.query("INSERT INTO book (name, description) VALUES ($1, $2) RETURNING *", [name, description]);

        res.status(201).json({ message: "Book is created", newBook: newBook.rows[0] }); // Access newBook.rows[0] to get the inserted book
    } catch (err) {
        res.status(500).send(err.message);
    }
});






app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(PORT,function(req,res){
    console.log("server is running on port 5000")
})