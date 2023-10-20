import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateProduct from './pages/CreateProduct'

import { BrowserRouter  , Routes , Route  } from 'react-router-dom';
import Products from './pages/Products';

function App() {  
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/create' Component={CreateProduct}/>
        <Route path='/Products' Component={Products}/>



      </Routes>



    </BrowserRouter>

  );
}

export default App;
