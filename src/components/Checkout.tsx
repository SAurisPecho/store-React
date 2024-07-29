import { useEffect, useState, useRef } from "react"
import Product from "../interfaces/Product";
import ProductProp from "../interfaces/ProductProp";
import { useDispatch } from "react-redux";
import productsActions from "../store/actions/products";

const { calculateCant } = productsActions;

function Checkout ({product}: ProductProp) {
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState(false);
    const units = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

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
        const cantProductsOnCart = productsOnCart.reduce((acc: number, current: Product)=>acc + current.quantity , 0);
        console.log(cantProductsOnCart);
        dispatch(calculateCant({cantProducts: cantProductsOnCart}))
        
    };
    return (
        <>
            <div className=" p-[10px_10px_10px_0] m-[10px] flex-col w-full md:w-4/5 lg:w-1/3 xl:w-[340px]">
                <div className="bg-[#ebebeb] p-[33px] rounded-lg">
                    <span className="text-[#ff3b3c] font-bold text-xl">Total:</span>
                    <h2 id="price" className="text-[28px] font-bold mt-[10px]">
                        ${(product.price*quantity).toLocaleString()}
                    </h2>
                    <p className="leading-[20px] break-words">
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                        50711 haciendo la solicitud en AFIP.
                    </p>
                    <ul className="p-0 list-none mb-[30px]">
                        <li className="flex my-[15px]">
                            <span>
                                <img src="../truck.png" alt="Truck" className="flex mr-[15px] "/>
                            </span>
                            <span className="ml-3 leading-[20px]">
                                Agrega el producto al carrito para conocer los costos de envío
                            </span>
                        </li>
                        <li className="flex my-[15px]">
                            <span>
                                <img src="../plane.png" alt="Plane" className="flex mr-[15px]" />
                            </span>
                            <span className="ml-3 leading-[20px]">
                                    Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
                            </span>
                        </li>
                    </ul>
                    <div className="gap-y-5">
                        <div className="flex mb-[10px]">
                            <input 
                                className="h-10 rounded-[10px] border-none w-[62px] mr-[10px] pr-[10px] pl-[20px] box-border"
                                id = "input-quantity"
                                type="number" 
                                min="1" 
                                value={quantity} 
                                ref={units}
                                onChange={(event) => setQuantity(Number(event?.target.value))}
                            />
                            <button 
                                type="button" 
                                className={button ? "w-full bg-black hover:bg-[#3e3737] text-white font-bold border-none h-[40px] rounded-[10px]" : "w-full bg-[#ff3b3c] hover:bg-[#ff5151] text-white font-bold border-none h-10 rounded-[10px]"}
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