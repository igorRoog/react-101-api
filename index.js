const express = require("express");
var cors = require("cors");
const app = express();
const port = 3005;

app.use(cors());

app.get("/tasks/:timeout", (req, res) => {
  const timeout = Number(req.params.timeout);

  console.log("REQUEST!");

  setTimeout(() => {
    res.send([
      { id: "1", name: "Task1", completed: false },
      { id: "2", name: "Task2", completed: false },
      { id: "3", name: "Task3", completed: false },
      { id: "4", name: "Task4", completed: false },
      { id: "5", name: "Task5", completed: false },
    ]);
  }, [timeout]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
