import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllColors = async () => {
  return prisma.colors.findMany();
};

const createColor = async (colorName: string, hexCode: string) => {
  return prisma.colors.create({
    data: { colorName, hexCode },
  });
};

const getSpecificColor = async (id: number) => {
  return prisma.colors.findUnique({
    where: { id },
  });
};

const updateColor = async (id: number) => {};

const deleteColor = async (id: number) => {
  return prisma.colors.delete({
    where: { id },
  });
};

const proColorRepo = {
  getAllColors,
  createColor,
  getSpecificColor,
  updateColor,
  deleteColor,
};

export default proColorRepo;
