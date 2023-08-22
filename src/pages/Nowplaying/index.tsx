import clsx from "clsx";
import Home from "../../components/Home";
import Header from "../../components/layouts/Header";
import styles from "./Nowplaying.module.css";
import GetMovies from "../../components/GetMovies";
function Nowplaying() {
  return (
    <div className={clsx(styles.wrapper, "container", "mx-auto")}>
      <Header />
      <Home />
      <div>Now Playing</div>
      <GetMovies url={"now_playing"} />
    </div>
  );
}

export default Nowplaying;
