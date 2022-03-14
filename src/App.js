import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Product from "./Product.js";
import Checkout from "./Checkout.js";
import Subtotal from "./Subtotal.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
