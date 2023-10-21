import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateProduct from './pages/CreateProduct'

import { BrowserRouter  , Routes , Route  } from 'react-router-dom';
import Products from './pages/Products';
import React, { useState } from 'react';
import { Header } from './components/Header';
export const shoppingCartContext =React.createContext()


function App() {  
  const cartState = useState([])  
  return (
    <div className="App">
    <shoppingCartContext.Provider  value={cartState}>
      <Header/>
      <BrowserRouter>

        <Routes>

          <Route path='/create' Component={CreateProduct}/>
          <Route path='/Products' Component={Products}/>



        </Routes>



      </BrowserRouter>
    </shoppingCartContext.Provider>
    </div>
  );
}

export default App;
