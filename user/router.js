const { Router } = require("express");
const router = new Router();
const User = require("./model");
const bcrypt = require("bcrypt");

router.post("/user", (request, response, next) => {
  const user = {
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 10)
  };
  User.create(user)
    .then(image => response.json(image))
    .catch(error => next(error));
});

module.exports = router;
