import React, { useState, useEffect } from 'react';
import { listMovieServices } from '../../services/listMovieService';
import './listMovie.scss';

const ListMovie = () => {
  const [arrMovie, setArrMovie] = useState([]);

  useEffect(() => {
    listMovieServices
      .getListMovie()
      .then(res => {
        console.log(res);
        setArrMovie(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="list_movie bg-black">
      <div className="container">
        <h2 className="p-2 font-semibold text-white text-lg">
          Movie Trending___
        </h2>
        <div className="list_movie_inner p-2 gap-5">
          {arrMovie.slice(0, 12).map((item, index) => (
            <div key={index}>
              <div className="list_movies">
                <img
                  className="h-96 w-full object-cover"
                  src={item.hinhAnh}
                  alt={item.tenPhim}
                />
                <div className="list_movies_content">
                  <h3 className="text-lg font-bold">{item.tenPhim}</h3>
                  <p className="text-sm clip_text">{item.moTa}</p>
                </div>
                <div className="video-wrapper">
                  <i className="fa-solid fa-circle-play list_movies_icon" />
                </div>
              </div>
            </div>
          ))}
          {arrMovie.length > 12 && (
            <>
              <h2 className="text_heading col-span-6   p-0 font-semibold text-lg text-white">
                Coming soon___
              </h2>
              {arrMovie.slice(12).map((item, index) => (
                <div key={index + 12}>
                  <div className="list_movies">
                    <img
                      className="h-96 w-full object-cover"
                      src={item.hinhAnh}
                      alt={item.tenPhim}
                    />
                    <div className="list_movies_content">
                      <h3 className="text-lg font-bold">{item.tenPhim}</h3>
                      <p className="text-sm clip_text">{item.moTa}</p>
                    </div>
                    <div className="video-wrapper">
                      <i className="fa-solid fa-circle-play list_movies_icon" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
