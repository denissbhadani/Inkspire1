import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data'; // assuming your data is saved in a file named sampleData.js

const prisma = new PrismaClient();

async function main() {
  for (const product of sampleData.products) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log('Sample data seeded successfully');
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
