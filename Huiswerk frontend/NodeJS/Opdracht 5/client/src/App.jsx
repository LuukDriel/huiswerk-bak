import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fout bij ophalen producten:", err));
  }, []);

  return (
    <div className="app-container">
      <h1>Producten</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            <strong>{product.naam}</strong>
            <div>Prijs: €{product.prijs}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
