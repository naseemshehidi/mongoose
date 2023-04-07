const mongooose=require("mongoose");
const schema=mongooose.Schema;
const userSchema = new schema({
name:String,
age:Number,
email:{type:String,unique:true},
isAdmin:{type:Boolean,default:false},  
});
const User= mongooose.model('User',userSchema);
module.exports=User;