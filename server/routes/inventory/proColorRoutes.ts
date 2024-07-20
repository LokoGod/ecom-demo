import express from "express";
const proColorRoutes = express.Router();

import { getAllColors, createColor } from "../../controllers/inventory/proColorCont";

proColorRoutes.route("/").get(getAllColors).post(createColor);

export { proColorRoutes };
