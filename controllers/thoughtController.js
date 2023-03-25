const { Thought, User } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find({})
        .select()
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            return res.status(400).json(err);
        })
    },

    getOneThought(req, res) {
        Thought.fineOne({_id: params.thoughtId })
        .select()
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought from this ID'})
            }
            return res.json(dbThoughtData)
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json(err);
        })
    },

    createThought({params, body }) {
        Thought.create({
            thoughtText: body.thoughtText,
            username: body.username,
            userId: params.userId
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this ID' });
                return;
            }
            return res.json(dbUserData);
        })
        .catch(err => res.json(err))
    },

    updateThought({ params, body}, res) {
        Thought
        .findOneAndUpdate({ _id: params.thoughtId }, 
            body,
            { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this ID' });
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    deleteThought({}){

    },

    addReaction({}){

    },

    removeReaction({}){

    }
}

module.exports = thoughtController;