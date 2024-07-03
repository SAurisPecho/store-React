import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import products from "../assets/products.js";

function Home () {
    return (
        <>
        <NavBar />
        <Hero first="tecnologia" second="Renovada"/>
        <main className="w-full flex justify-center items-center p-[20px]">
            <div className="w-[1080px] flex flex-wrap justify-center sm:justify-between lg:justify-between" id="products">
                {products.map((each) => (
                    <ProductCard
                    key={each.id}
                    id ={each.id}
                    title={each.title}
                    price={each.price}
                    color={each.colors[0]}
                    image={each.images[0]}
                    />
                ))}
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Home;