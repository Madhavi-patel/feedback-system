// const mongoos=require('mongoose');
// const schema =mongoos.schema;

// const userSchema =new schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   enrollmentNo: {
//     type: String,
//     required: true,
//   },
//   course: {
//     type: String,
//     required: true,
//   },
//   sem: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const Usermodel = mongoos.model('User', userSchema);
// module.exports = Usermodel;



import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  enrollmentNumber: { type: Number, required: true, unique: true },
  course: { type: String, required: true },
  semester: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);

