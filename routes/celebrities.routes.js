const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/create", (req, res) => {
	console.log("\tCELEB-CREATE GET");
    res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
    try {
		const data = req.body;
		//res.send(data);
		console.log("trying to create");
		await Celebrity.create(data)
		console.log("created");
		res.render("celebrities");
	}
	catch {
		console.error("ERROR");
		res.render("celebrities/new-celebrity");
	}
});

router.get("/", async (req, res, next) => {
	try {
		const allCelebsArray = await Celebrity.find();
		res.render("celebrities/celebrities", {allCelebsArray});
	}
	catch{
		console.log("ERROR");
	}


  });
  

module.exports = router;