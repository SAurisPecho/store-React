import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Product from "../interfaces/Product.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Home () { 
    const [products, setProducts] = useState<Product[]>([]);
    const text = useSelector((store: any) => store.products.text);

    useEffect(() =>{
        axios.get("/JSON/products.json")
        .then((res) => {
            const filterData = res.data.filter((each: Product) => 
            each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData)
        })
        .catch((err) => console.log(err));
    }, [text]);

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