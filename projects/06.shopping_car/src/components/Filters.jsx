import { useId } from "react";
import { useFilters } from "../hooks/useFilter";
import "./Filters.css";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value), // Convertimos a número
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice || 0} // Evitamos errores si es undefined
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          id={categoryFilterId}
          value={filters.category}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
        </select>
      </div>
    </section>
  );
}
