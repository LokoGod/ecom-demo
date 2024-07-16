import express from "express";
const proColorRoutes = express.Router();

import { getAllColors } from "../../controllers/inventory/proColorCont";

proColorRoutes.route("/").get(getAllColors);

export { proColorRoutes };
