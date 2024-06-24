import styles from "./OnSale.module.css";
import products from "../assets/products";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import OnSaleCard from "../components/OnSaleCard";
import { useState } from "react";

function Onsale() {
    const [ from , setFrom ] = useState(0);
    const [ to , setTo ] = useState(3);

    const onSaleProducts = products.filter((product) => product.onsale);

    const handleNext = () => {
        if (to < onSaleProducts.length) {
            setFrom(from + 3);
            setTo(to + 3);
        }
    };

    const handlePrev = () => {
        if (from > 0) {
            setFrom(from - 3);
            setTo(to - 3);
        }
    };

    return(
        <>
        <NavBar />
        <Hero first="tecnologia" second="Renovada"/>
        <main>
            <div className={styles["navigation-buttons"]}>
                <button className={styles["btn-navigation"]} onClick={handlePrev} disabled={from === 0}>
                    Prev
                </button>
            </div>
            <div className={styles["product-container"]} id="products">
                {onSaleProducts.slice(from,to).map((each) => (
                    <OnSaleCard
                    key={each.id}
                    id ={each.id}
                    title={each.title}
                    price={each.price}
                    color={each.colors[0]}
                    image={each.images[0]}
                    />
                ))}
            </div>
            <div className={styles["navigation-buttons"]}>
                <button className={styles["btn-navigation"]} onClick={handleNext} disabled={to >= onSaleProducts.length}>
                    Next
                </button>
            </div>
        </main>
        
        <Footer />
        </>
    )
}

export default Onsale;