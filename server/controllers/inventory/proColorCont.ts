import { Request, Response, NextFunction } from "express";
import proColorRepo from "../../repositories/inventory/proColorRepo";
import { error } from "console";

const getAllColors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const color = await proColorRepo.getAllColors();
    res.status(200).json({ color });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createColor = async (req: Request, res: Response) => {
  const { colorName, hexCode } = req.body;
  try {
    const color = await proColorRepo.createColor(colorName, hexCode);
    res.status(201).json({ color });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecificColor = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const color = await proColorRepo.getSpecificColor(id);
    if (!color) {
      res.status(404).json({ error: "Not Found" });
    } else {
      res.status(200).json({ color });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllColors, createColor, getSpecificColor };
