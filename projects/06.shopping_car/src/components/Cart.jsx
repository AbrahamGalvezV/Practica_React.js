import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useId } from "react";
import "./Cart.css"

export function Cart() {
    const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
              alt="Big bed"
            />
            <div>
              <strong>Big Bed</strong> - $1899.99
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
