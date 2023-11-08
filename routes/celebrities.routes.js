const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res) => {
    const data = req.body;
    res.send(data);
    //Celebrity.create()

    
});

module.exports = router;