import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductList from './pages/ProductList';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    </Routes>
    <Routes>
    <Route  path='/login' element={<Login/>}></Route>
    </Routes>
    <Routes>
    <Route  path='/register' element={<Register/>}></Route>
    </Routes>
    <Routes>
    <Route path='/Product' element={<Product/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
