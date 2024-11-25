const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    `<h1>Users List:</h1>
    <ul>
    <li><a href='/users/UserName'>UserName</a></li>
    <li><a href='/users/User'>User</a></li>
    <li><a href='/users/yoon'>yoon</a></li>
    <li><a href='/users/sdafsdf'>sdafsdf</a></li>
    <li><a href='/users/UserHello'>UserHello</a></li>
    </ul>`
  );
});

app
  .route("/users/:user")
  .get((req, res) => {
    res.send(`<a href="/">back home</a><h1>${req.params.user}</h1>`);
  })
  .post((req, res) => {
    res.send("Add a user");
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
