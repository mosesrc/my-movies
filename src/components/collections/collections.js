import Movie from "../movie-card/Movie";
import { useParams } from "react-router-dom";

function Collections({ data }) {
  let params = useParams();
  const getCollection = data.find((el) => el === params.collectionId);

  console.log(params.collectionId);
  const html = data.map((item, idx) => {
    return (
      <div key={idx}>
        <Movie movieData={item} />
      </div>
    );
  });
  return html;
}

export default Collections;
