import clsx from "clsx";
import styles from "./Home.module.css";
import Icon from "../Icon";
function Home() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img
        className={clsx(styles.wrapper)}
        src="https://movie-site-delta.vercel.app/img/home-background.png"
        alt=""
      />
      <div className={styles.infor}>
        <h1>
          Hitman's Wife's
          <br />
          Bodyguard
        </h1>
        <p>Releasing 23 july</p>
        <div className={clsx("flex")}>
          <Icon />
          <span>Watch the trailler</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
