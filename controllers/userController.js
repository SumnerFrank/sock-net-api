const { User, Thought } = require('../models/index');

const userController = {
    getUsers(req, res){
        User.find({})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v -thoughts'})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            return res.status(400).json(err)
        });
    },
    
    getOneUser({ params }, res) {
        User.findOne({ _id: params.userId })
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this ID' });;
                return;
            }
            return res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            return res.json(400).json(err);
        })
    },
    
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err))
    },
    
    updateUser({ params, body }, res){
        User
        .findOneAndUpdate({ _id: params.userId},
            body,
            { new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this ID' });;
                return;
            }
            return res.json(dbUserData);
        })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err));
    },
    
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.userId })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this ID' });;
                return;
            }
            return Thought.deleteMany({ userId: params.id });
        })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err));
    },
    
    addFriend({ params }, res){
        User
        .findOneAndUpdate({ _id: params.userId },
            { $addToSet: { friends: params.friendId } },
            { new: true }    
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this ID' });;
                return;
            }
            return res.json(dbUserData);
        })
        .catch(err => res.status(err));
    },
    
    removeFriend({ params }, res) {
        User
        .findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId}},
            { new: true }
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }
}

module.exports = userController;