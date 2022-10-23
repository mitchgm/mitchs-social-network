const { Thought, User } = require("../models");

const userCont = {

    getAllUsers(req, res) {
        // this will gather all of our users
        User.find()
            .populate({ path: "friends", select: "-__v" })
            .then(async (users) => {
                return res.json(users);
            })
            .catch((err) => {

                return res.status(400).json(err);
            });
    },


    getOneUser(req, res) {
        // this will get just one user for us
        User.findOne({ _id: req.params.userId })
            .populate({ path: "friends", select: "-__v" })
            .select("-__v")
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: "Sorry dawg, no user has that ID" })
                    // this catches an error, aka none with that id
                    : res.json({
                        user,
                    })
            )
            .catch((err) => {

                return res.status(400).json(err);
            });
    },
};

module.exports = userCont