import './App.css';
import NavbarComponent from './components/navbar/navbar';
import ItemDetailConainer from './containers/itemDetail/itemDetailConainer';
import ItemListContainer  from './containers/itemList/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from './containers/cartContainer/cartContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailConainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
