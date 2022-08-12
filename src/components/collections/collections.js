import Movie from "../movie-card/Movie";

function Collections({ data }) {
  return (
    <div>
      <Movie actionData={data.actionCollection} />
      <Movie actionData={data.comedyCollection} />
      <Movie actionData={data.romanceCollection} />
    </div>
  );
}

export default Collections;
