import styles from "./NotFound.module.css"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

function NotFound () {
    return(
        <>
        <NavBar />
        <Hero first="404" second="not found"/>
        <div className={styles["text"]}> 404 <br /> Not Found</div>
        <Footer />
        </>
    )
}
export default NotFound;