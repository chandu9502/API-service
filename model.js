const mongoose=require('mongoose')

const Products=mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('products',Products)

