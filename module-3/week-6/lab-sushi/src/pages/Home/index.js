import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/ProductCard";
import { MenuContext } from "../../contexts/MenuContext";

const Home = () => {
  const navigate = useNavigate()

  const { cards, getAllProducts } = useContext(MenuContext)

  const handleNavigateToDetails = (product) => {
    navigate(`/details/${product.id}`, { state: product })
  }

  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <div>
      <div className="main-container">
        <div data-testid="products-list" className="products-list">
          {cards.map((product) => (
            <ProductCard product={product}
              onClick={() => handleNavigateToDetails(product)}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
