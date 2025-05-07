import { EVENTS } from "./consts";

//---------------------------------------------------------------------

export function navigate(href) {
  window.history.pushState({}, "", href); // Cambia la URL sin refrescar la página
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent); // Notifica a React que la URL ha cambiado
}

export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {

        const isMainEvent = event.button === 0 // Primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.shiftKey 
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to)
        }
    }

        return <a onClick={handleClick} href={to} target={target} {...props}/>
    
}