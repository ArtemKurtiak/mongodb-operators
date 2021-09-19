const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    cars: {
        type: Array
    }
});

module.exports = model('user', UserSchema);
