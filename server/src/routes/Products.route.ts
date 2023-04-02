import express, { Request, Response } from "express"
import ProductController from "../controllers/Products.Controller"

const router = express.Router()

const controller: ProductController = new ProductController();

router.get('/', (req: Request, res: Response) => {
  const response = controller.getAllProducts();
  res.json(response)
})

export default router;