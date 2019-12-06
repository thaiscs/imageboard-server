const { Router } = require("express");
const router = new Router();
const Image = require("../model");

router.get("/image", (request, response) => {
  Image.findAll().then(images => {
    response.send(images);
  });
});

router.post("/image", (request, response, next) => {
  Image.create(request.body)
    .then(image => response.json(image))
    .catch(error => next(error));
});

module.exports = router;
