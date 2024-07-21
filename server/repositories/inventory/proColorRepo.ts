import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllColors = async () => {
  return prisma.colors.findMany();
};

const createColor = async (colorName: string, hexCode: string) => {
  return prisma.colors.create({
    data : { colorName, hexCode },
  })
}

const deleteColor = async () => {
  
}

const proColorRepo = {
  getAllColors, createColor
};

export default proColorRepo;
