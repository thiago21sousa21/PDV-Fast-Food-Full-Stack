import { Products, Categories } from "@prisma/client";

export type NewProduct = Omit<Products, 'id'>
export type NewCategorie = Omit<Categories, 'id'>


