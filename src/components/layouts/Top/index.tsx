import Home from "../../Home";
import Header from "../Header";
import styles from "./Top.module.css";
import clsx from "clsx";

function Top() {
  return (
    <div className={clsx(styles.wrapper, "container", "mx-auto")}>
      <div className={clsx(styles.header, "mx-auto", "container", "w-full")}>
        <Header />
      </div>
      <div className={clsx(styles.home)}>
        <Home />
      </div>
    </div>
  );
}

export default Top;
