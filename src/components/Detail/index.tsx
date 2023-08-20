// import clsx from "clsx";
// import styles from "./Detail.module.css";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useGetMovies";

// function Detail() {
//   const { id } = useParams(); // Lấy tham số "id" từ đường dẫn
//   let value = "";
//   if (typeof id == "string") {
//     value = id;
//   }
//   const { data, loading, error } = useFetch(value);
//   if (error) {
//     console.log(error);
//   }
//   return (
//     <div className={clsx(styles.wrapper)}>
//       <div>{loading && <div>Loading... </div>}</div>
//       <div>{data && data.map((item) => <div>{item.id}</div>)}</div>
//     </div>
//   );
// }

// export default Detail;
// phía trên lỗi ko lấy được data
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import clsx from "clsx";
interface Genres {
  id: number;
  name: string;
}

interface dataType {
  id: number;
  backdrop_path: string;
  original_title: string;
  genres: Genres[];
  release_date: string;
  original_language: string;
  runtime: number;
  vote_average: number;
  overview: string;
}

const Detail = () => {
  const [data, setData] = useState<dataType>();
  const [character, setCharacter] = useState<dataType>();
  const { id } = useParams(); // Lấy tham số "id" từ đường dẫn
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className={clsx(styles.wrapper, "container", "mx-auto")}>
      {data && (
        <div className={clsx(styles.content)}>
          <div>
            <img
              className={clsx(styles.img)}
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.backdrop_path}`}
              alt=""
            />
          </div>

          <div>
            {" "}
            <h2>{data.original_title}</h2>
            <br />
            {data.release_date}
            {data.genres.map((genre, i) => (
              <span key={i}>{genre.name}</span>
            ))}
            {`${Math.floor(data.runtime / 60)}h${data.runtime % 60}m`}
          </div>
        </div>
      )}
      {character && <div>{character.id}</div>}
    </div>
  );
};

export default Detail;
