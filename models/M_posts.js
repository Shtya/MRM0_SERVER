const {Schema, model} = require("mongoose") 
const postSchema = new Schema ({
    title : {type : String, required : true}, 
    category : {type : String }, 
    description : {type : String, required : true}, 
    thumbnail : {type : String, required : true}, 
    titleData : {type : String}, 
    descData : {type : String}, 
    // comments: [
    //   {
    //     name:   { type: String, required: true },
    //     email:  { type: String, required: true },
    //     message: { type: String, required: true },
    //     website: { type: String, required: true },
    //     date: { type: Date, default: Date.now },
    //   }
    // ]
  }, {timestamps : true}) 
  


module.exports = model("posts" , postSchema)