import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllSizes = async () => {
  return prisma.size.findMany();
};

const createProductSize = async (sizeName: string, sizeValue: number) => {
  return prisma.size.create({ data: { sizeName, sizeValue } });
};

const proSizeRepo = {
  getAllSizes,createProductSize
};

export default proSizeRepo;
