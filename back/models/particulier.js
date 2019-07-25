const mongoose = require('mongoose');


const commentaireSchema = mongoose.Schema({
  _id:Number,
  Nom: String,
  Prenom: String,
  Telephone: Number,
  Email: String

}, {
  timestamps: true
});




  module.exports=mongoose.model('Particulier',commentaireSchema)
