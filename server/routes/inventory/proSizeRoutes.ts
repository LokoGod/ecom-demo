import express from "express";
const proSizeRoutes = express.Router();

import { getAllSizes } from "../../controllers/inventory/proSizeCont";

proSizeRoutes.route("/").get(getAllSizes);

export { proSizeRoutes };
