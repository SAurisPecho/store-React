import ProductProp from "../interfaces/ProductProp";

function Description ({product}: ProductProp) {
    
    return (
        <>
            <div className=" p-[10px_10px_10px_0] m-[10px] flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-[340px]">
                <h1 className="text-black text-[28px] font-bold break-words mt-0">{product.title}</h1>
                <form className="product-selector mt-[21px]">
                <fieldset className="border-none p-0 flex flex-col">
                    <label className="text-black text-[15px] font-bold" htmlFor="color">Color</label>
                    <select
                    className="w-full h-9 bg-white rounded-[10px] border border-[#eaeaea] my-[10px] p-[8px] box-border"
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
                <div className="mt-[21px] leading-5">
                <span className="text-black text-[15px] font-bold">Descripción</span>
                <p className="text-[16px] mt-2">{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default Description;