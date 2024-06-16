import styles from "./Checkout.module.css"
import { useEffect, useState, useRef } from "react"

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    colors: string[];
    onsale: boolean;
    quantity: number;
}

interface CheckoutProps {
    product: Product
}

function Checkout ({product}: CheckoutProps) {
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);
    const units = useRef<HTMLInputElement>(null)

    useEffect(() => {
    let productsOnCart: Product[] = [];
    const cart = localStorage.getItem("cart")
    if (cart){
        productsOnCart = JSON.parse(cart);
    } 
    const isInCart = productsOnCart.some((each) => each.id === product.id);
    if(isInCart) {
        const productOnCart = productsOnCart.find((each) => each.id === product.id);
        setQuantity(productOnCart?.quantity || 1 ); 
    } else {
    setQuantity(1);
    }
    setButton(isInCart)
}, [product]);

    const manageCart = () => {
        let productsOnCart: Product[] = [];
        const cart = localStorage.getItem("cart");
        if(cart){
            productsOnCart = JSON.parse(cart);
        }
        const one = productsOnCart.some((each) => each.id === product.id);
        if(!one) {
            productsOnCart.push({ ...product, quantity });
            setButton(true);
        } else {
            productsOnCart = productsOnCart.filter((each) => each.id !== product.id);
            setButton(false);
        }
        localStorage.setItem("cart", JSON.stringify(productsOnCart));
    };
    return (
        <>
            <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 id="price" className={styles["checkout-total-price"]}>
                        ${(product.price*quantity).toLocaleString()}
                    </h2>
                    <p className={styles["checkout-description"]}>
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                        50711 haciendo la solicitud en AFIP.
                    </p>
                    <ul className={styles["checkout-policy-list"]}>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img src="../truck.png" alt="Truck"/>
                            </span>
                            <span className={styles["policy-desc"]}>
                                Agrega el producto al carrito para conocer los costos de envío
                            </span>
                        </li>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img src="../plane.png" alt="Plane" />
                            </span>
                            <span className={styles["policy-desc"]}>
                                    Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
                            </span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                            <input 
                                id = "input-quantity"
                                type="number" 
                                min="1" 
                                value={quantity} 
                                ref={units}
                                onChange={(event) => setQuantity(Number(event?.target.value))}
                            />
                            <button 
                                type="button" 
                                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                                onClick={manageCart}
                            >
                                {button ? "Quitar del carrito" : "Añadir al Carrito"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;