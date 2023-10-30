const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgSchema = new Schema({
   title : {
    type: String,
    required:true,
   },
   author:{
    type: String,
    required:true,
   }, 
   summary :{
    type: String,
    required:true,
   }
});

const ModelClass = mongoose.model('books', MsgSchema);

module.exports = ModelClass;
