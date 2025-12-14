const mongoose =  require("mongoose")

const meesageSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    messsage:{
        type:String,
        require:true
    }
},
{timestamps: true})

const message = mongoose.model("Message",meesageSchema)
module.exports = message