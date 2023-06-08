import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { addToCart, clearCart } from './store/slices/cartSlice'
import { TState } from './store'
import { TProduct } from './store/types'

function App() {

  const cart: TProduct[] = useSelector((state: TState) => state.cart)
  const dispatch = useDispatch();
  const agregar = () => {
    dispatch(addToCart(
      {
        id: 'sfdasfsdfsdfs',
        title: 'The Place',
        subtitle: '111 Boadway avenue',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen',
        imgPath: '',
        price: 15
      }
    ))
  }
  const eliminar = () => dispatch(clearCart())

  return (
    <>

      {
        cart.length > 0 ? cart.map(product => (
          <div>
            <h3>{product.title}</h3>
            <div>{product.subtitle}</div>
          </div>
        )) : <></>
      }
      <div className="card">
        <button onClick={agregar}>
          Add Product 
        </button>
        <button onClick={eliminar}>
          Reset Cart
        </button>

      </div>
    </>
  )
}

export default App
