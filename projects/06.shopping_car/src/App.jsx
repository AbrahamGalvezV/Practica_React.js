import { products } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FiltersContext } from "./context/filters";
import { useFilters } from "./hooks/useFilter";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <> 
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
