const router = require("express").Router();
const thoughtRoutes = require("./thought-routes");
const userRoutes = require("./user-routes");
// our dependencies 

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);
// sets our routes

module.exports = router;
// exports to our module