import { createContext, useState } from "react";

// 1. Crear el contexto
// Este es el que tenemos que consumir 
export const FiltersContext = createContext();

// 2. Provider para proveer el contexto
// Este nos provee de acceso al contexto 
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
    });

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
}
