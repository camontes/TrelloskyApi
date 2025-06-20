const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
     password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'default.png'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = model("User",UserSchema, "users");