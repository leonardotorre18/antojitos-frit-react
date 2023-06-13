import { IProductController } from "./interfaces/Products.interface";
import { TProduct } from "./types/Product.type";

export default class Controller implements IProductController {
  getAllProducts(): TProduct[] {
    return [{
      id: '50058537479',
      title: 'Producto de ejemplo 1',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subtitle: "Subtítulo de Ejemplo",
      imgPath: "/bocadillo1.jpg",
      price: 32.2
    }, {
      id: '50058537478',
      title: 'Producto de ejemplo 2',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subtitle: "Subtítulo de Ejemplo",
      imgPath: "/bocadillo2.jpg",
      price: 32.2
    }, {
      id: '50058537477',
      title: 'Producto de ejemplo 3',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subtitle: "Subtítulo de Ejemplo",
      imgPath: "/bocadillo1.jpg",
      price: 32.2
    }]
  }
  
}