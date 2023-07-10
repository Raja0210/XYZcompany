import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    id: {
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    doj:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    basic:{
        type:String,
        required:true
    },
    rent:{
        type:String,
        required:true
    },
    conveyance:{
        type:String,
        required:true
    },
    fixed:{
        type:String,
        required:true
    },
    ctc:{
        type:String,
        required:true
    }
})

export default mongoose.model('employees',employeeSchema)