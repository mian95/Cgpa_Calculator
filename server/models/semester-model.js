const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/uafscrap")
.then(() => console.log("Connected to MongoDB")
)
.catch(err => console.error(err.message));

const semestersSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject' // Reference to Subject model
    }]
})

const Semester = mongoose.model("Semester", semestersSchema)
module.exports = Semester;