import Movie from "../movie-card/Movie";

function Collections({ data }) {
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
