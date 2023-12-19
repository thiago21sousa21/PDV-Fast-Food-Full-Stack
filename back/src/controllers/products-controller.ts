import { Request, Response } from 'express'
import { } from '../protocols'
import httpStatus from 'http-status';
import { productsService } from '../services'

export async function getProducts(req: Request, res: Response) {
    const result = await productsService.getProducts()

    res.status(httpStatus.OK).send(result)
}

export * from './products-controller';