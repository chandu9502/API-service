const express=require('express')
const app=express()
const Products=require('./model')
app.use(express.json())
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://chandu2002:chandu2002@cluster0.n1mep3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('DB connected')).catch((err)=>
    console.log(err.message))

app.get('/',(req,res)=>{
    res.send("<h1>Heloo<h1>");
    res.end();
})
const products=[
    {
        id:1,
        name:"abc"
    }
]
app.get('/get',async(req,res)=>{
    try{
        const allData=await Products.find();
    res.json(allData);
    }
    catch(err){
        console.log(err.message)
    }
})
app.delete('/delete/:id',async (req,res)=>{
    try{
        await Products.findByIdAndDelete(req.params.id);
        return res.json(await Products.find())
    }
    catch(err){
        console.log(err.message)
    }
})
app.post('/add',async(req,res)=>{
    const{id,name}=req.body;
    try{
        const newData=new Products({id,name})
        await newData.save()
        return res.json( await Products.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(8000,()=>console.log('Server Running'))