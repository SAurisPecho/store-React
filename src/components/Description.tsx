import styles from "./Description.module.css"

function Description ({product}) {
    
    return (
        <>
            <div className={styles["product-description-block"]}>
                <h1 className={styles["product-title"]}>{product.title}</h1>
                <form className={styles["product-selector"]}>
                <fieldset className={styles["product-fieldset"]}>
                    <label className={styles["product-label"]} htmlFor="color">Color</label>
                    <select
                    className={styles["product-select"]}
                    typeof="text"
                    aria-placeholder="Selecciona un color"
                    id="color"
                    >
                    {product.colors.map((each, index) => (
                        <option key={index} value={each}>{each}</option>
                    ))}
                    </select>
                </fieldset>
                </form>
                <div className={styles["product-description"]}>
                <span className={styles["product-label"]}>Descripción</span>
                <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default Description;