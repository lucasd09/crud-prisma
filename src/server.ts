import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    hello: "POGGERS",
  });
});

app.listen(3030, () => console.log("server running on http://localhost:3030"));
