import styles from "./Thumbs.module.css"
import { useState, useEffect } from "react";

function Thumbs ({product}) {
    const [thumb, setThumb] = useState(product.images[0]);
    useEffect(() => setThumb(product.images[0]), [product.images]);    
    
    return (
        <>
            <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                {product.images.map((each,index) => 
                <img
                    key={index}
                    className={styles["mini-img"]}
                    src={each}
                    alt={product.title}
                    onClick={() => setThumb(each)}
                />)}
                </div>
                <img
                className={styles["big-img"]}
                id="big-img"
                src={thumb}
                alt={product.title}
                />
            </section>
        </>
    )
}

export default Thumbs;