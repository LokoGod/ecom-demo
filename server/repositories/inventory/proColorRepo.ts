import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllColors = async () => {
  return prisma.colors.findMany();
};

const createColor = async (colorName: string, hexCode: string) => {
  const color = await prisma.colors.create({
    data : { colorName, hexCode },
  })
}



const proColorRepo = {
  getAllColors, createColor
};

export default proColorRepo;
