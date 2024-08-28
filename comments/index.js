import express from "express";
import bodyParser from "body-parser";
import { randomBytes } from "node:crypto";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content, status: "pending" });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { id: commentId, content, postId: req.params.id, status: "pending" },
  });  

  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  console.log("Received Event", type);

  if (type === "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    axios.post("http://localhost:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }




  res.send({});
});


app.listen(4001, () => {
  console.log("Listening on port 4001");
});
