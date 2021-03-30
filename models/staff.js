
const mongoose = require("mongoose")

const StaffSchema = mongoose.Schema(
    {
    name: {type: String},
    dob: {type: Date},
    imageurl: {type: String},
    hobbies : {type: [String] }
    }
  )
  
  let Staff = mongoose.model('Staff', StaffSchema);

  module.exports = Staff