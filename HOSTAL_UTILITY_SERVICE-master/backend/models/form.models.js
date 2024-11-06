import mongoose from 'mongoose'
const formschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pno:{
        type:Number,
        required:true

    },
    date:
    {
        type:Date,
        required:true
    },
    book:
    {
        type:String,
        required:true
    }

},
{
    timestamps:true
}
);
const Form=mongoose.model('form',formschema)
export default Form;