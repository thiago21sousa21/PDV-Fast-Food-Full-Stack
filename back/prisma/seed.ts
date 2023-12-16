import prisma from "../src/database";

const categories = ['combos', 'acompanhamentos', 'bebidas', 'sobremesas']

const createCategories = async () => {
    for (let i = 0; i < categories.length; i++) {
        await prisma.categories.upsert({
            where: { name: categories[i] },
            update: {},
            create: { name: categories[i] },
        });
    }
};

createCategories();


