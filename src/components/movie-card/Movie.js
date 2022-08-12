import React from "react";
import "./Movie.css";

function Movie({ movieData }) {
  const listItems = movieData.map((item, idx) => {
    console.log(item.img);
    return (
      <div key={idx} className='card card-view' style={{ width: "19rem" }}>
        <img src={item.img} className='card-img-top' alt='movie-cover-img' />

        <div className='card-body'>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-text'>{item.description}</p>
        </div>
        <ul className='list-group list-group-horizontal'>
          <li className='list-group-item'>{item.rating}</li>
          <li className='list-group-item'>{item.genre}</li>
          <li className='list-group-item'>{item.year}</li>
        </ul>
        <br />
        <div className='card-footer text-muted'>{item.duration}</div>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>{listItems}</div>
    </div>
  );
}

export default Movie;
