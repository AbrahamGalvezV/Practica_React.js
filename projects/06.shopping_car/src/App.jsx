import { products as initialProducts } from './mocks/products.json';
import { Products } from './components/Products';
import { useState, useMemo } from 'react';
import { Header } from './components/Header';

function App() {
  const [filters, setFilters] = useState({  
    category: 'all',  
    minPrice: 0 
  });
 
  const filterProducts = () => {  
    return initialProducts.filter(product => 
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
    );
  };

  const filteredProducts = useMemo(filterProducts, [filters]);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
