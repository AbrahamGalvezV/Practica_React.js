import { AddToCartIcon } from './Icons';
import './Products.css';

export function Products({ products = [] }) { // Evita undefined pasando un array vacío por defecto

    return (
        <main className="products">
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
