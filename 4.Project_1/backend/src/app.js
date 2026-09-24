const express = require("express");
const postModel = require("./models/post.Model");
const multer = require("multer");
const uploadFile = require("./services/storage.services");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({
    Message: "Post created successfully",
    post,
  });
});

app.get("/post", async (req, res) => {
  const posts = await postModel.find();

  return res.status(200).json({
    Message: "Posts fetched successfully.",
    posts,
  });
});

module.exports = app;
