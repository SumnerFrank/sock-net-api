const { Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {},
        createdAt: {},
        username: {},
        userId: {},
        reactions: {}
    }
)

module.exports = Thought;