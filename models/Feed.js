const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        feedid :{
            type:String,
            required:true
        },
        feedsource :{
            type:String,
            required:true
        },
        feedcontent :{
            type :String,
            required : true
        },
        feedcaption :{
            type: String,
            required : true
        },
        feeddescription :{
            type : String,
            required :true
        },
        feedlanguage :{
            type : String
        },
        feeddate :{
            type : Date,
            default : Date.now
        },
        feeddeleted :{
            type : String
        }

    }
);

//Export this module
module.exports = Feed = mongoose.model('feed',UserSchema);