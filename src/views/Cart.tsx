import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import { useDispatch } from "react-redux";
import productsActions from "../store/actions/products";
import { Link } from "react-router-dom";

const { calculateTotal } = productsActions;

function Cart () {
    const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const products = localStorage.getItem("cart");
        if (products) {
          const parsedProducts = JSON.parse(products);
          setProductsOnCart(parsedProducts);
          dispatch(calculateTotal({ products: parsedProducts }));
        } else {
          setProductsOnCart([]);
          dispatch(calculateTotal({ products: [] }));
        }
      }, [productsOnCart, dispatch]);

    return (
        <>
        <NavBar />
        <Hero first="mi" second="Carrito" />
        <main className="w-[300px] block mx-auto my-[20px] p-0 md:flex md:w-auto md:items-start lg:flex lg:mx-[40px] xl:mx-[130px] 2xl:w-[1200px] 2xl:mx-auto ">
            <div className="block md:w-2/3 2xl:w-5/6">
                {productsOnCart.length > 0 ? (
                    productsOnCart.map((each: Product) => (
                        <CartCard 
                        key={each.id}
                        product={each}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center">
                        <Link to="/">
                            <img src="../public/icons8-carrito-de-compras-48.png" alt="Carrito vacío" className="w-[120px] mx-auto my-8" /> 
                            {/* <a target="_blank" href="https://icons8.com/icon/Uwwgm0gp3DTA/shopping-cart">Carrito de compras</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a> */}
                        </Link>
                        <p className="text-center text-gray-600">Tu carrito está vacío</p>

                    </div>
                )
                }
            </div>    
            <CartResume/>
        </main>
        <Footer />
        </>
    )
}

export default Cart;