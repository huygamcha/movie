import clsx from "clsx";
import styles from "./header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import MainNavBar from "../MainNavbar";
function Header() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div>
        <Link to="/">
          {" "}
          MOVIE<span className={clsx(styles.title_sub)}>VENNIE</span>
        </Link>
      </div>
      <div>
        <MainNavBar />
      </div>
      <div className={clsx(styles.searchavatar)}>
        <div className={clsx(styles.search)}>
          <input placeholder="Search Movie" type="text" />
          <div className={clsx(styles.search_icon)}>
            <AiOutlineSearch />
          </div>
        </div>
        <div>
          <img
            className={clsx(styles.img)}
            src="https://movie-site-delta.vercel.app/img/user.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
