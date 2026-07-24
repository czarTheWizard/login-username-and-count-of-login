import { useEffect } from "react";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new "Failed to fetch products"();
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
      ;
    </div>
  );
}

export default Products;
