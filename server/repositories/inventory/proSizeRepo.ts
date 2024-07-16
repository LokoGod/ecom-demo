import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllSizes = async () => {
  return prisma.size.findMany();
};

const proSizeRepo = {
    getAllSizes
};
  
export default proSizeRepo;
  