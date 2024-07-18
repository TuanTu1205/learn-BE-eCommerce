"use strict";
const express = require("express");
const router = express.Router();
const InventoryController = require("../../controllers/inventory.controller");
const { asyncHandler } = require("../../auth/checkAuth");
const { authenticateToken } = require("../../auth/authUtils");

router.use(authenticateToken);
router.post("", asyncHandler(InventoryController.addStock));
module.exports = router;
