import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllColors = async () => {
  return prisma.colors.findMany();
};



const proColorRepo = {
  getAllColors,
};

export default proColorRepo;
