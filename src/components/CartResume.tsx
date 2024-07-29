import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import productsActions from "../store/actions/products";

const { calculateCant } = productsActions;
const { calculateTotal } = productsActions;


function CartResume () {
    const total = useSelector((store: any) => store.products.total)
    const dispatch = useDispatch();

    const handlePay = () => {
        Swal.fire({
            title: "¿Estas seguro de realizar la compra?",
            text: "una vez iniciado el proceso no se puede revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#a953fa",
            cancelButtonColor: "#ff3b3c",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            timer: 5000,
        }).then((res) => {
            if (res.isConfirmed) {
              localStorage.setItem("cart", "[]")
              dispatch(calculateCant({cantProducts:0}))
              dispatch(calculateTotal({total: 0}))
              console.log("Local Storage ha sido limpiado.");
            }
          });
        };
    
    return (
        <>
        <div className="w-[300px] mt-[20px] p-3 flex-col bg-[#f2f2f2] rounded-[9px] break-words block md:flex md:justify-between 
        md:p-[20px] md:m-[10px] md:h-56 md:w-1/3 lg:w-1/3 lg:p-[35px_24px] lg:mt-2 xl:px-[35px] 2xl:px-[30px]">
            <div className="flex-grow flex flex-col justify-between ">
            <h2 className="text-black flex justify-center md:justify-center font-bold"><span>Resumen del pedido</span></h2>
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Total :</h3> 
                <strong className="font-bold">${total}</strong>
            </div>
            <small className="pb-[10px] justify-center">Incluye impuesto PAIS y percepción AFIP.</small>
            </div>
            <button className="w-full bg-[#ff3b3c] text-white font-bold border-none md:h-[40px] rounded-[10px] hover:bg-[#ff5151]" id="buy" type="button" onClick={handlePay}>
                COMPRAR
            </button>
        </div>
        </>
    )
}

export default CartResume;