import React from "react";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const addDefaultSrc = (event) => {
    event.target.src =
      "https://img.freepik.com/free-vector/broken-glass-background-realistic-style_23-2147806148.jpg?size=338&ext=jpg";
  };
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} onError={addDefaultSrc} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};
