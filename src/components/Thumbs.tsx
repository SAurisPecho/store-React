import { useState, useEffect } from "react";

function Thumbs ({product}) {
    const [thumb, setThumb] = useState(product.images[0]);
    useEffect(() => setThumb(product.images[0]), [product.images]);    
    
    return (
        <>
            <section className="sm:p-[10px] sm:m-[10px] flex w-full sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-[340px] justify-center">
                <div className="lg:w-full m-[3px] ">
                {product.images.map((each,index) => 
                <img
                    key={index}
                    className=" w-14 h-14 lg:w-full lg:h-11 object-cover mb-1"
                    src={each}
                    alt={product.title}
                    onClick={() => setThumb(each)}
                />)}
                </div>
                <img
                className="w-2/3 h-full sm:w-4/5 sm:h-7/10 md:w-9/10 md:h-2/5 lg:w-5/6 lg:h-1/2 ml-1 object-cover"
                id="big-img"
                src={thumb}
                alt={product.title}
                />
            </section>
        </>
    )
}

export default Thumbs;