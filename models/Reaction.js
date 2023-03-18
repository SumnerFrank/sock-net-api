const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        reactionId: {},
        reactionBody: {},
        username: {},
        createdAt: {}
    }
)

module.exports = Reaction;