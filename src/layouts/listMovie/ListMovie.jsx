import React, { useState, useEffect } from 'react';
import { listMovieServices } from '../../services/listMovieService';
import './listMovie.scss';
import { Link } from 'react-router-dom';
import movie1 from './../../assets/imgs/listMovie-1.png';
import movie2 from './../../assets/imgs/listMovie-2.png';
import movie3 from './../../assets/imgs/listMovie-3.png';
import movie4 from './../../assets/imgs/listMovie-4.png';

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
        <h2 className="p-2 font-semibold text-white text-lg mt-10">
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
                  <h3 className="text-lg text-center font-bold">
                    {item.tenPhim}
                  </h3>
                  <div className="space-x-2 mt-2 flex justify-center items-center">
                    <Link
                      to={`/details/${item.maPhim}`}
                      className="py-2 px-4 rounded bg-red-500 text-white"
                    >
                      CHI TIẾT
                    </Link>
                    <Link
                      to={`/tickets/${item.maPhim}`}
                      className="py-2 px-4 rounded bg-red-500 text-white"
                    >
                      MUA VÉ
                    </Link>
                  </div>
                </div>
                <div className="video-wrapper">
                  <a
                    href={item.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-circle-play list_movies_icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <h2 className="text_heading col-span-6 p-0 font-semibold text-lg text-white">
            Coming soon___
          </h2>
          {arrMovie.length > 12 && (
            <>
              {arrMovie.slice(12).map((item, index) => (
                <div key={index + 12}>
                  <div className="list_movies">
                    <img
                      className="h-96 w-full object-cover"
                      src={item.hinhAnh}
                      alt={item.tenPhim}
                    />
                    <div className="list_movies_content">
                      <h3 className="text-lg text-center font-bold">
                        {item.tenPhim}
                      </h3>
                      <div className="space-x-2 mt-2 flex justify-center items-center">
                        <Link
                          to={`/details/${item.maPhim}`}
                          className="py-2 px-4 rounded bg-red-500 text-white"
                        >
                          CHI TIẾT
                        </Link>
                        <Link
                          to={`/tickets/${item.maPhim}`}
                          className="py-2 px-4 rounded bg-red-500 text-white"
                        >
                          MUA VÉ
                        </Link>
                      </div>
                    </div>
                    <div className="video-wrapper">
                      <a
                        href={item.trailer}
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-circle-play list_movies_icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="list-movie-coming-soon">
          <div className="list-movie-coming-media">
            <img src={movie1} alt="" />
            <div className="list-movie-coming-content">
              <h2 className="list-movie-coming-heading ">Kung Fu Panda 4</h2>
              <p className="list-movie-coming-text">
                Po must train a new warrior when he's chosen to become the
                spiritual leader of the Valley of Peace. However, when a
                powerful shape-shifting sorceress sets her eyes on his Staff of
                Wisdom,
              </p>
              <h3 className="list-movie-coming-time">2hr 10m</h3>
            </div>
          </div>
          <div className=" space-y-5">
            <div className="list-movie-coming-media">
              <img src={movie2} alt="" />
              <div className="list-movie-coming-content">
                <h2 className="list-movie-coming-heading list-movie-coming-heading-mobile ">
                  The Lord of the ring
                </h2>

                <h3 className="list-movie-coming-time list-movie-coming-time-mobile">2hr 10m</h3>
              </div>
            </div>
            <div className="list-movie-coming-media">
              <img src={movie3} alt="" />
              <div className="list-movie-coming-content">
                <h2 className="list-movie-coming-heading list-movie-coming-heading-mobile ">War of Kingdom</h2>

                <h3 className="list-movie-coming-time list-movie-coming-time-mobile">2hr 10m</h3>
              </div>
            </div>
            <div className="list-movie-coming-media">
              <img src={movie4} alt="" />
              <div className="list-movie-coming-content">
                <h2 className="list-movie-coming-heading list-movie-coming-heading-mobile ">Civil War</h2>

                <h3 className="list-movie-coming-time list-movie-coming-time-mobile">2hr 10m</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
