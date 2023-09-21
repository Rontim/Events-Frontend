const express = require("express");
const path = require("path");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(express.json());

app.use(express.static("my-events/dist"));
app.get("*", (req, res) => {
  return res.sendFile(
    path.resolve(__dirname, "my-events", "dist", "index.html")
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
