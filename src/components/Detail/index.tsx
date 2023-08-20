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

interface dataType {
  id: number;
  original_language: string;
}

const Detail = () => {
  const [data, setData] = useState<dataType>();
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
  }, []);
  return (
    <div className={clsx(styles.wrapper)}>
      <h2>Detail</h2>
      {data && <div>{data.original_language}</div>}
    </div>
  );
};

export default Detail;
