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
        User.findOne({ _id: params.id })
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
        .cacth(err => res.status(400).json(err))
    },
    
    updateUser({ params, body }, res){
        User
        .findOneAndUpdate({ _id: params.id},
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
    
    deleteUser({}){
        
    },
    
    addFriend({}){
        
    },
    
    removeFriend({}){
        
    }
}

module.exports = UserController;