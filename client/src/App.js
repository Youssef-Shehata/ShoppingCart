import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateProduct from './pages/CreateProduct'

import { BrowserRouter  , Routes , Route  } from 'react-router-dom';
import {Products} from './pages/Products';
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import RegisterPage from './pages/RegisterPage';
export const shoppingCartContext =React.createContext()


function App() {  
  const cartState = useState([])  
  return (
    <div className="App">
    <shoppingCartContext.Provider  value={cartState}>
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path='/cart' Component={Cart}/>
        
          <Route path='/create' Component={CreateProduct}/>
          <Route path='/Products' Component={Products}/>
          <Route path='/register' Component={RegisterPage}/>




        </Routes>



      </BrowserRouter>
    </shoppingCartContext.Provider>
    </div>
  );
}

export default App;
