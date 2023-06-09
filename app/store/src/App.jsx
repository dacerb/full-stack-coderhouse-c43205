import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <>
    
      <BrowserRouter>
        <CartProvider>
          <NavBar />  
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={"Our Products!!"}/> } />
            <Route path='/category/:categoryId' element={ <ItemListContainer/> } />
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/checkout' element={ <Checkout/> } />
            <Route path='*' element={ <h2>Site Under Construction</h2> } />
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>  
    </>
  )
}

export default App
