import styles from "./NavButton.module.css";
import { Link } from "react-router-dom";

function NavButton({title, link}) {
    return(
        <>
          <li className={styles.navLi}>
            <Link to ={link} className={styles.navA}>
              {title}
            </Link>
          </li>
        </>
    )
}
export default NavButton;