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
    }
}