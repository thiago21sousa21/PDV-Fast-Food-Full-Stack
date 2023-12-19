import { productsRepository } from '../repositories'
import { } from '../protocols'

export async function getProducts() {
    const result = await productsRepository.getProducts()
    return result
}

