import clsx from "clsx";
import styles from "./header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import MainNavBar from "../MainNavbar";
import useSearch from "../../../hooks/useSearch";
import { useState } from "react";
function Header() {
  const { onchange } = useSearch();
  // câu lệnh dùng để lưu giá trị search vào
  const [data, setData] = useState<string>("");
  const handleSearch = () => {
    onchange(data);
  };
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
          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Search Movie"
            type="text"
          />
          <div className={clsx(styles.search_icon)}>
            <Link to={"/search"} onClick={handleSearch}>
              <AiOutlineSearch />
            </Link>
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
