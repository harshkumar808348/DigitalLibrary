const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/loginsignup")

.then(()=>{
    console.log("mongodb  database connected");
})
.catch((error)=>{
    console.error("failed to connect:", error);
});

const LogInSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   }
})


const collection = new mongoose.model("Collection", LogInSchema)

module.exports=collection