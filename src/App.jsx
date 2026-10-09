
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const productPrice = 499;

  useEffect(() => {
    document.title = "Amazon Product Store";
  }, []);

  function addToCart() {
    setQuantity((previousQuantity) => previousQuantity + 1);
  }

  function removeOne() {
    setQuantity((previousQuantity) =>
      Math.max(0, previousQuantity - 1)
    );
  }

  function resetCart() {
    setQuantity(0);
  }

  return (
    <div className="app">
      <Header />

      <button
        className="toggle-button"
        onClick={() => setShowProduct((previous) => !previous)}
      >
        {showProduct ? "Hide Product" : "Show Product"}
      </button>

      {showProduct && (
        <ProductCard
          name={productName}
          price={productPrice}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
          setSelectedColor={setSelectedColor}
          setDeliveryCity={setDeliveryCity}
          addToCart={addToCart}
          removeOne={removeOne}
          resetCart={resetCart}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;