
import prisma from "../database";

export async function getProducts() {
    const result = await prisma.$transaction([
        prisma.products.findMany({
            where: { categoryId: 1 },
            take: 4
        }),
        prisma.products.findMany({
            where: { categoryId: 2 },
            take: 4
        }),
        prisma.products.findMany({
            where: { categoryId: 3 },
            take: 4
        }), prisma.products.findMany({
            where: { categoryId: 4 },
            take: 4
        }),
    ])
    return {
        combos: result[0],
        dishes: result[1],
        drinks: result[2],
        desserts: result[3]
    }
}







