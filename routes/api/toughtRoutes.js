const router = require("express").Router();
// our depenedncy 

const {
    getAllThoughts,
    getOneThought,
    // calling back our conts

} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts, getOneThought);

module.exports = router;
// exporting