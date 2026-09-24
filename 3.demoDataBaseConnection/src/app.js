const express = require("express");

const noteModel = require("./models/noteModel.js");

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    Message: "Note created Successfully.",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    Message: "Note fetched!",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    Message: "note deleted Successfully.",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    { description: description },
  );

  res.status(200).json({
    Message: "Note Updated Successfully.",
  });
});

module.exports = app;
