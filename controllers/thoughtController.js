const { Thought, User } = require("../models");

const thoughtCont = {
    // keeps our controller functions within our export


    getAllThoughts(req, res) {
        // this will get all of our thoughts
        Thought.find()
            .populate({ path: "reactions", select: "-__v" })
            .then((thoughts) => res.json(thoughts))
            // this gathers our thoughts
            .catch((err) => res.status(400).json(err));
    },


    getOneThought(req, res) {
        // this will get just one thought
        Thought.findOne({ _id: req.params.thoughtId })
            .populate({ path: "reactions", select: "-__v" })
            .select("-__v")
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "Cannot find a thought with that ID" })
                    // this message comes from a 404 error which means no thought was found
                    : res.json(thought)
            )
            .catch((err) => res.status(400).json(err));
    },



};

module.exports = thoughtCont

// this exports our thoughtCont 