import proColorRepo from "../../repositories/inventory/proColorRepo";

const getAllColors = async (req: any, res: any) => {
  try {
    const color = await proColorRepo.getAllColors();
    res.status(200).json({ color });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllColors }