import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
// import products from "../assets/products.js";
import Product from "../interfaces/Product.js";
import axios from "axios";
import { useState, useEffect } from "react";

function Home () { 
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() =>{
        axios.get("/JSON/products.json")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <>
        <NavBar />
        <Hero first="tecnologia" second="Renovada"/>
        <main className="w-full flex justify-center items-center p-[20px]">
            <div className="w-[1080px] flex flex-wrap justify-center sm:justify-between lg:justify-between" id="products">
                {products.map((each:Product) => (
                    <ProductCard
                    key={each.id}
                    id ={each.id}
                    title={each.title}
                    price={each.price}
                    colors={each.colors}
                    images={each.images}
                    />
                ))}
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Home;