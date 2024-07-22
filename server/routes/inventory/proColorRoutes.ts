import express from "express";
const proColorRoutes = express.Router();

import {
  getAllColors,
  createColor,
  getSpecificColor,
} from "../../controllers/inventory/proColorCont";

proColorRoutes.route("/").get(getAllColors).post(createColor);
proColorRoutes.route("/:id").get(getSpecificColor);

export { proColorRoutes };
