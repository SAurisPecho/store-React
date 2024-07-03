import { Link } from "react-router-dom";

function NavButton({title, link}) {
    return(
        <>
          <li className="no-underline inline-block">
            <Link to ={link} className="text-white font-bold text-center no-underline inline-block w-[40px] p-[5px_0] text-[14px] hover:underline sm:w-[120px]">
              {title}
            </Link>
          </li>
        </>
    )
}
export default NavButton;