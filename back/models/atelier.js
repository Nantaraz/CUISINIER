const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: Number,
    id2: Number,
    Titre:String,
    Description:String,
    Date:Date,
    HoraireDebut:String,
    Duree:String,
    NombrePlacesDispo:Number,
    NombrePlacesRes:Number,
    Prix:Number,
    photo_profil:String,
    visibilite:Boolean
},
{
    timestamps: true
}
);

module.exports = mongoose.model('profile', UserSchema);
