import useFetch from "../../hooks/useGetMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./GetMovies.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "../Icon";

export default function GetMovies({ url }: { url: string }) {
  // const { page } = usePage();
  const [page, setPage] = useState<number>(1);
  const { data, loading, error } = useFetch(url, page.toString());
  console.log(data);
  if (error) {
    console.log(error);
  }
  return (
    <>
      {loading && <div className={clsx(styles.color)}>Loading...</div>}
      {data && (
        <div className={clsx("container", "mx-auto")}>
          <div className={clsx(styles.wrapper)}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              // pagination={{ clickable: false }}
              spaceBetween={15}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className={clsx(styles.color, styles.content)}
                >
                  <Link to={`/detail/${item.id}`}>
                    <div className={clsx(styles.content_wrapper)}>
                      <div className={clsx(styles.title)}>
                        <h3>{item.title}</h3>
                        <span className={clsx("flex", "justify-between")}>
                          <span>Action</span>
                          <Icon />
                        </span>
                      </div>
                      <img
                        className={clsx(styles.img)}
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt={item.title}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      <div className={clsx(styles.btn_page)}>
        <button onClick={() => setPage(page <= 1 ? 1 : page - 1)}>
          PrePage
        </button>
        <button className={clsx(styles.btn_text)}>{page}/20</button>
        <button onClick={() => setPage(page >= 20 ? 20 : page + 1)}>
          NextPage
        </button>
      </div>
    </>
  );
}
