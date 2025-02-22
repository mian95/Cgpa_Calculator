const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/uafscrap")
.then(() => console.log("Connected to MongoDB")
)
.catch(err => console.error(err.message));

const studentSchema =  mongoose.Schema({
    registrationNo:{
        type:String,
        required:true,
    },
    studentName: {
        type: String,
        required: true
    },
    semesters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester' //  Reference to Semester model
    }]
})

const Student = mongoose.model("Student",studentSchema)
module.exports = Student;