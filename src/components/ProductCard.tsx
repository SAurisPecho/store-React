import { Link } from "react-router-dom";
import Product from "../interfaces/Product";

function ProductCard (props:Product) {
    const { id, title, colors, price, images } = props
    
    return (
        <>
            <Link className="bg-[#f0f0f0] text-[#383838] rounded-[15px] w-[250px] m-4 no-underline" to={"/details/"+id}>
                <img
                    className="w-full h-[250px] object-cover object-center rounded-tl-[15px] rounded-tr-[15px]"
                    src={images[0]}
                    alt={id}
                />
                <div className="p-5 box-border">
                    <span className="text-[20px] font-bold leading-[25px] break-words block">{title}</span>
                    <span className="text-[12px] font-normal text-[#383838] mb-[5px]">{colors[0]}</span>
                    <div className="flex my-[5px] justify-between items-center text-[20px] font-bold text-[#428f13]">
                        <span className="text-[20px] font-bold">{price}</span>
                        <span className="text-[15px] font-bold text-[#428f13]">50% Off</span>
                    </div>
                    <div className="text-[10px] font-light">
                        Incluye impuesto País y percepción AFIP
                    </div>
                </div>
            </Link>    
        </>
    )
}

export default ProductCard;