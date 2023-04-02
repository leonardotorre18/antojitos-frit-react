import express, { Request, Response } from "express"
import ProductRouter from './Products.route';

const router = express.Router()

router.use('/products', ProductRouter)

export default router;