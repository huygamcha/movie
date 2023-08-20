import clsx from "clsx";
import Header from "../Header";
import NavBar from "../Navbar";
import styles from "./defaultlayout.module.css";
import Content from "../Content";
// import Getdata from "../../Getdata/GetMovie";
import GetMovie from "../../GetMovies";
import Home from "../../Home";
// import Pagination from "../../Pagination";

function DefaultLayout() {
  return (
    <div className={clsx("container", "mx-auto")}>
      <section id="home">
        <div className={clsx(styles.header, "mx-auto", "container", "w-full")}>
          <Header />
        </div>
      </section>
      <div className={clsx(styles.wrapper, "container", "mx-auto")}>
        <div className={clsx(styles.aside)}>
          <div className={clsx(styles.navbar)}>
            <NavBar />
          </div>
          <div className={clsx(styles.content, "container")}>
            <Content>
              <Home />
              <section id="nowplaying">
                <h4 className={clsx(styles.heading)}>
                  <span> Now Playing</span>
                </h4>
                <GetMovie url={"now_playing"} />
              </section>
              <section id="popularfilm">
                <h4 className={clsx(styles.heading)}>
                  <span> Popular Film</span>
                </h4>
                <GetMovie url={"popular"} />
              </section>
              <section id="toprate">
                <h4 className={clsx(styles.heading)}>
                  <span> Top Rate</span>
                </h4>
                <GetMovie url={"top_rated"} />
              </section>
            </Content>
          </div>
        </div>
        <div>{/* <Pagination /> */}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
