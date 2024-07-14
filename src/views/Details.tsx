import NavBar from "../components/NavBar"; 
import Footer from "../components/Footer";
// import products from "../assets/products.js"
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard.js";
import Hero from "../components/Hero.js";
import Thumbs from "../components/Thumbs.js";
import Description from "../components/Description.js";
import Checkout from "../components/Checkout.js";
import Product from "../interfaces/Product.js";
import axios from "axios";
import { useState, useEffect } from "react";

function Details (){ 
    const { id } = useParams();
    const [product, setProduct] = useState<Product>({
        id: "",
        title: "",
        price: 0,
        images: [],
        colors: [],
    });
    const [onsale, setOnsale] = useState<Product[]>([]);

    useEffect(() => {
        axios("/JSON/products.json")
        .then((res) => {
            const products: Array<Product> = res.data;
            const detailProduct: Product | undefined = products.find((each) => each.id === id);
            detailProduct && setProduct(detailProduct);
            const filterProduct: Array<Product> = products.filter((each) => each.onsale);
            filterProduct.length > 0 && setOnsale(filterProduct);
        })
        .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
        <NavBar />
        {!product && <Hero first="NOT" second="found" />}
        <main>
        <div className="flex flex-wrap md:w-[730px] lg:w-[940px]">
            <div id="details" className="w-full flex flex-col sm:flex-row justify-center flex-wrap lg:flex-nowrap ">
                <Thumbs product={product} />
                <Description product={product} />
                <Checkout product={product} />
            </div>
            <div className="w-full block justify-center m-[20px_0]">
            <h2 className="text-center text-black text-[28px] font-bold break-words mt-0">Ofertas de la semana</h2>
                <div id="product-container" className="w-full flex justify-center flex-wrap lg:justify-center">
                    { onsale.map((product:Product) =>(
                            <ProductCard
                            key={product.id}
                            id ={product.id}
                            title={product.title}
                            price={product.price}
                            colors={product.colors}
                            images={product.images}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        </main>
        <Footer />
        </>
    )}

export default Details;