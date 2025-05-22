import { useEffect } from "react";
import { useParams } from "react-router-dom";
//TODO: code challenge
//TODO: put json in the state, loading state, painting detail screen like Home.js
//TODO: make navigation bar as a menu
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
