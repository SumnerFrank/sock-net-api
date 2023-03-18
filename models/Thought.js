const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        thoughtText: {},
        createdAt: {},
        username: {},
        userId: {},
        reactions: {}
    }
)

module.exports = Thought;