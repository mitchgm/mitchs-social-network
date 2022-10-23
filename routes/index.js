const router = require("express").Router();
const apiRoutes = require("./api");
// dependencies 

router.use("/api", apiRoutes);

router.use((req, res) => res.send("Error! Wrong route."));
// this is our error message 

module.exports = router;
// you know we stay exporting our stuff