const router = require("express").Router();
// require aka the dependencies

const {
    getAllUsers,
    getOneUser,
    // call back from our controller folder 
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers, getOneUser);



module.exports = router;
// export szn