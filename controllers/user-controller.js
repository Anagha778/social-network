const { User} = require('../models');

//User controller
const userController = {

    // get all users
    getAllUser(req, res) {
      User.find({})
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .select('-__v')
          .then(dbUserData => {
            // If no user found, send 404
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // createUser
    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true ,runValidators: true })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.status(400).json(err));
    },

    // delete user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
          .then(dbUserData => {
            console.log(dbUserData);
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            Thought.deleteMany({ username : dbUserData.username })
            .then(() => {
                res.json({message: "User deleted successfully"});
            })
            .catch(err => res.status(400).json(err));            
          })
          .catch(err => res.status(400).json(err));
    },

     // POST /api/users/:userId/friends/:friendId
     addFriend({ params }, res) {
      // add friendId to userId's friend list
      User.findOneAndUpdate(
          { _id: params.userId },
          { $addToSet: { friends: params.friendId } },
          { new: true, runValidators: true }
      )
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this userId' });
              return;
          }
          res.json(dbUserData);
          res.json({message: "Friend added successfully"});
      })
      .catch(err => res.json(err));
  },

}

module.exports = userController;