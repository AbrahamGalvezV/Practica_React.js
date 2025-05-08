import { useEffect, useState } from "react";
import { EVENTS } from "./consts";
import { match } from "path-to-regexp";

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // Usamos path-to-regexp para poder detectar
    // rutas dinámicas como por ejemplo 
    // /search/:query <- :query es una ruta dinámica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // Guardar los parámetros de la utl que eran dinamicos y que
    // hemos extraido con path-to-regexp y la url es /search/javascript
    // matched.parans.query === 'javaScript'
    routeParams = matched.params 
    return true

  })?.Component;
  return Page ? <Page routeParams={routeParams} /> 
  : <DefaultComponent routeParams={routeParams}/>;
}