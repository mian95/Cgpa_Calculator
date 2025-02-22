const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/uafscrap")
.then(() => console.log("Connected to MongoDB")
)
.catch(err => console.error(err.message));

const subjectSchema =  mongoose.Schema({
    subjectCode:{
        type:String,
        required:true
    },
    subjectCredit:{
        type:String,
        required:true
    },
    subjectMarks:{
        type:Number,
        required:true
    },

    subjectGrades:{
        type:String,
        required:true
    }
})

const Subject = mongoose.model("Subject", subjectSchema)
module.exports = Subject;