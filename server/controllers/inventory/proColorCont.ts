import { Request, Response, NextFunction } from "express";
import proColorRepo from "../../repositories/inventory/proColorRepo";

const getAllColors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const color = await proColorRepo.getAllColors();
    res.status(200).json({ color });
  } catch (error) {
    console.error(error);
    next({ status: 500, message: "Internal Server Error"})
  }
};

const createColor = async (req: any, res: any) => {
  const { colorName, hexCode } = req.body;
  try {
    const color = await proColorRepo.createColor(colorName, hexCode);
    res.status(201).json({ color });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllColors, createColor };
