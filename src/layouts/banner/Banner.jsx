import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import { bannerMovieService } from '../../services/bannerMovieService';
import '../banner/responsiveBanner.scss';
// import './responsiveBanner.scss';
const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};
const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
};
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Banner = () => {
  const [arrBanner, setArrBanner] = useState([]);

  useEffect(() => {
    bannerMovieService
      .getListBanner()
      .then(res => {
        console.log(res);
        setArrBanner(res.data.content);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" banner-home">
      <Carousel
        className=" "
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        arrows={true}
        autoplay
      >
        {arrBanner.map((item, index) => {
          return (
            <div className="banner 2xl:h-[750px]" key={index}>
              <img
                className="w-full h-full object-cover"
                src={item.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
