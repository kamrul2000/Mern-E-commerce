
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import ProductsList from './Components/ProductList/ProductsList';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
import Notfound from './Components/NotFound/Notfound';
import ProductDescription from './Components/ProductDescription/ProductDescription';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductsList />} />
      <Route path='/productdescription/:id' element={<ProductDescription />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/*' element={<Notfound />} />
    </Routes>
  );
}

export default App;
