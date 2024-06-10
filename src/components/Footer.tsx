import styles from "./Footer.module.css";

function Footer() {
    return (
        <>
        <footer>
            <div id="footer" className={styles.footerContainer}>
                <ul className={styles.footerUl}>
                    <li className={styles.footerMainItem}>
                        <a className={styles.footerA} href="./index.html">Ofertas</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Laptops</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Audio</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Auriculares</a>
                    </li>
                </ul>
                <ul className={styles.footerUl}>
                    <li className={styles.footerMainItem}>
                        <a className={styles.footerA} href="./index.html">Cómo comprar</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Formas de pago</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Envios</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Devoluciones</a>
                    </li>
                </ul>
                <ul className={styles.footerUl}>
                    <li className={styles.footerMainItem}>
                        <a className={styles.footerA} href="./index.html">Costos y tarifas</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Impuestos</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Facturación</a>
                    </li>
                </ul>
                <ul className={styles.footerUl}>
                    <li className={styles.footerMainItem}>
                        <a className={styles.footerA} href="./index.html">Mis pedidos</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Pedir nuevamente</a>
                    </li>
                    <li className={styles.footerLi}>
                        <a className={styles.footerA} href="./index.html">Lista de deseos</a>
                    </li>
                </ul>
                <ul className={styles.footerUl}>
                    <li className={styles.footerMainItem}>
                        <a className={styles.footerA} href="./index.html">Garantía</a>
                    </li>
                </ul>
            </div>
            <div className={styles.footerCopyright}>Curso de HTML + CSS 2023</div>
            </footer>
        </>
    )
}
export default Footer;