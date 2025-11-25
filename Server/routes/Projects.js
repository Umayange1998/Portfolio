const express = require("express");
const router = express.Router();
const Projects = require("../models/projects")



// POST new Project
router.post("/", async (req, res) => {
  try {
    const newProject = await Projects.create(req.body);
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/////get all projects//////

router.get("/", async (req,res)=>{
    try{
        const listOfProjects = await Projects.find();
        res.json(listOfProjects);
    }catch(error) {
         res.status(500).json({ error: error.message });
    }
})

module.exports= router