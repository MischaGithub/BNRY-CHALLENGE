const express = require("express");
const router = express.Router();

// @route           GET api/images
// @desc            Save image and desciption
// @access          Public
router.get("/", (req, res) => {
    res.send("Get Images");
});


// @route           POST api/images
// @desc            Save image and desciption
// @access          Public
router.post("/", (req, res) => {
    res.send("Saved Image");
});


// @route           PUT api/images/:id
// @desc            Update or change of image and description
// @acess           Private
router.put("/:id", (req, res) => {
    res.send("Update Image");
});



module.exports = router;