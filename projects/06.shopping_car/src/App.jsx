import { products } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FiltersContext } from "./context/filters";
import { useFilters } from "./hooks/useFilter";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider> 
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
