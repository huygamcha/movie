import clsx from "clsx";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <img
        className={clsx(styles.wrapper)}
        src="https://movie-site-delta.vercel.app/img/home-background.png"
        alt=""
      />
    </>
  );
}

export default Home;
