import { useRef, useState } from "react";
import ProductProp from "../interfaces/ProductProp";
import { useDispatch } from "react-redux";
import productsActions from "../store/actions/products";

const { calculateTotal } = productsActions;

function CartCard ({product}:ProductProp) {
    const {id, title,  description, price, images, colors, quantity }  = product;
    const [totalPrice, setTotalPrice] = useState(price* (quantity ?? 0));
    const units = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const manageUnits = () => {
        let productsOnCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const foundProduct = productsOnCart.find((each) => each.id === id);
        if(foundProduct) {
            foundProduct.quantity = Number(units.current?.value);
            productsOnCart = productsOnCart.map((each) => {
                if(each.id === id) {
                    return {...foundProduct};
                }
                return each;
            });
        }
        setTotalPrice(price * Number(units.current?.value));
        dispatch(calculateTotal({products: productsOnCart}));
        localStorage.setItem("cart", JSON.stringify(productsOnCart)) 
    }

    return (
        <>
            <article className="bg-[#f2f2f2] rounded-[9px] flex-wrap mb-[10px] p-3 w-[300px] break-words flex justify-between items-center 
            md:w-[96%] md:h-56 md:p-[30px_12px] md:m-[10px] md:flex-col lg:w-[98%] lg:p-[20px_12px] xl:w-[97%] xl:h-56 ">
                <img className="w-[260px] h-[260px] m-2 md:mt-[10px] md:w-[150px] md:h-[150px] md:my-2 lg:w-[160px] lg:h-[160px] lg:mr-5 rounded-[9px] xl:mr-0 2xl:mr-4" src={images[0]} alt={title} />
                <div className="flex flex-col justify-between gap-[2px] md:w-[240px] md:h-[150px] lg:h-[160px] lg:w-2/3 lg:my-2 2xl:w-9/12">
                    <strong className="text-black ">{title}</strong><span className="whitespace-nowrap overflow-hidden text-ellipsis font-bold md:whitespace-normal md:overflow-visible md:text-clip"> - {colors[0]}</span>
                    <p className="line-clamp-2 whitespace-normal overflow-hidden text-clip lg:line-clamp-3  ">{description}</p>
                    <div className="inline-flex mt-[6px] justify-between items-center lg:mt-1 ">
                        <input className="w-[80px] p-[4px_25px] flex rounded-[10px] border border-[#eaeaea] md:justify-start md:w-[70px] md:h-[40px] md:p-[5px] lg:h-full lg:px-4" type="number" name="quantity" defaultValue={quantity} ref={units} onChange={manageUnits} min="1" id={id} />
                        <strong className="w-[120px] md:justify-end md:mr-4 flex text-right md:w-full">AR$ ${totalPrice}</strong>
                    </div>
                </div>
            </article>
        </>
    )
}

export default CartCard;