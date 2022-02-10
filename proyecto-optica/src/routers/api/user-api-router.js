const express = require("express");
const userApiController = require("../../controllers/api/user-api-controller");
const validationFormProfileEdit = require("../../middlewares/validations/validation-form-profile-edit");
const router = express.Router();

router.get("/profile/:id", userApiController.profile);
router.put(
  "/profile/:id/edit",
  validationFormProfileEdit,
  userApiController.profileEdit
);

module.exports = router;
