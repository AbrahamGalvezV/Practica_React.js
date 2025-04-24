import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilter'
import './Footer.css'

export function Footer () {
    // const { filters } = useFilters();
    const { cart } = useCart()

    return (
        <footer className='footer'>
            {/* <h4>Prueba técnica de React ⚛️</h4>
            <span>Abraham.Gálve.Vives@gmail.com</span>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
            {/* {
                JSON.stringify(filters, null, 2)
                
            } */}
            {
                // JSON.stringify(cart, null, 2)
            }
        </footer>
    )
}
