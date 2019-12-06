const { Router } = require("express");
const router = new Router();
const Image = require("../model");

router.get("/image", (request, response) => {
  Image.findAll().then(images => {
    response.send(images);
  });
});

module.exports = router;
