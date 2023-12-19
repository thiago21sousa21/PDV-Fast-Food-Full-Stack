import { Router } from "express";
import healthRouter from "./health-route"
import productsRouter from "./products-route"

const indexRoute = Router();

indexRoute
    .use('/health', healthRouter)
    .use('/products', productsRouter)

export default indexRoute;