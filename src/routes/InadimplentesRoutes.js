const express = require('express')
const router = express.Router()

const InadimplentesController = require('../controller/InadimplentesController')

router.get("/", InadimplentesController.index);
router.post("/", InadimplentesController.store);
router.get("/:id", InadimplentesController.show);
router.put("/:id", InadimplentesController.update);
router.delete("/:id", InadimplentesController.destroy);

module.exports = router