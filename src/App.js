
import './App.css';
import {
  Routes, Route,Link
} from "react-router-dom";
import Home from'./component/Home';
import About from'./component/About';
import Product from'./component/Product';
import Contact from'./component/Contact';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Trang Chủ</Link>
        <Link to="/about">Sản Phẩm</Link>
        <Link to="/product">Giới Thiệu</Link>
        <Link to="/contact">Liên Hệ</Link>
       </nav>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/contact" element={<Contact/>}/>

       
       </Routes>
      
    </div>
  );
}

export default App;
