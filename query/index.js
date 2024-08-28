import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());

function handleEvent(type, data) {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
}

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  console.log("Received Event", type);
  res.send({});
});

app.listen(4002, async () => {
  console.log("Listening on port 4002");

  // Fetch all events from the event bus
  await axios.get("http://localhost:4005/events").then((res) => {
    for (let event of res.data) {
      console.log("Processing event:", event.type);

      handleEvent(event.type, event.data);
    }
  });
});
