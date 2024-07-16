import proSizeRepo from "../../repositories/inventory/proSizeRepo";

const getAllSizes = async (req: any, res: any) => {
  try {
    const size = await proSizeRepo.getAllSizes();
    res.status(200).json({ size });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllSizes };
