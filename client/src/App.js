import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateProduct from './pages/CreateProduct'

import { BrowserRouter  , Routes , Route  } from 'react-router-dom';

function App() {  
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/create' Component={CreateProduct}/>


      </Routes>



    </BrowserRouter>

  );
}

export default App;
