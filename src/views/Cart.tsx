import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";

function Cart () {
    const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);

    useEffect(() => {
    const products = localStorage.getItem("cart");
    if(products) {
        setProductsOnCart(JSON.parse(products));
        }
    },[]);

    return (
        <>
        <NavBar />
        <Hero first="mi" second="Carrito" />
        <main className="w-[300px] block mx-auto my-[20px] p-0 md:flex md:w-auto md:items-start lg:flex lg:mx-[40px] xl:mx-[130px] 2xl:w-[1200px] 2xl:mx-auto ">
            <div className="block md:w-2/3 2xl:w-5/6">
                {productsOnCart.map((each: Product) => (
                    <CartCard 
                    key={each.id}
                    product={each}
                    />
                ))}
            </div>    
            <CartResume total = {90000} />
        </main>
        <Footer />
        </>
    )
}

export default Cart;