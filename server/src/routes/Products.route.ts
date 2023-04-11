import express, { Request, Response } from "express"
import ProductController from "../controllers/Products.Controller"

const router = express.Router()

const controller: ProductController = new ProductController();


/**
 * Post track
 * @openapi
 * /products:
 *    get:
 *      tags:
 *        - products
 *      summary: "Todos los productos"
 *      description: Devuelve todos los productos existentes en la base de datos sin ningún tipo de filtro 
 *      responses:
 *        '200':
 *          description: Retorna todos los productos encontrados
 */
router.get('/', (req: Request, res: Response) => {
  const response = controller.getAllProducts();
  res.json(response)
})

export default router;