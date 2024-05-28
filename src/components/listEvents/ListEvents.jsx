import { Tabs, Carousel } from 'antd';
import './listEvents.scss';
import thanhvien1 from './../../assets/imgs/thanhvien1.png';
import thanhvien2 from './../../assets/imgs/thanhvien2.png';
import thanhvien3 from './../../assets/imgs/thanhvien3.jpg';
import thanhvien4 from './../../assets/imgs/thanhvien4.jpg';
import thanhvien5 from './../../assets/imgs/thanhvien5.png';
import thanhvien6 from './../../assets/imgs/thanhvien6.jpg';
import thanhvien7 from './../../assets/imgs/thanhvien7.png';
import uudai1 from './../../assets/imgs/uudai1.png';
import uudai2 from './../../assets/imgs/uudai2.png';
import uudai3 from './../../assets/imgs/uudai3.jpg';
import uudai4 from './../../assets/imgs/uudai4.jpg';
import uudai5 from './../../assets/imgs/uudai5.jpg';
import uudai6 from './../../assets/imgs/uudai6.png';
import uudai7 from './../../assets/imgs/uudai7.png';
import uudai8 from './../../assets/imgs/uudai8.png';

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
};

const MemberCarousel = () => (
  <Carousel
    nextArrow={<NextArrow />}
    prevArrow={<PrevArrow />}
    className="carousel-container"
    arrows
    infinite={true}
    lazyLoad="ondemand"             
  >
    <div className="carousel-slide">
      <img className="max-w-full h-auto" src={thanhvien1} alt="Event 1" />
      <img className="max-w-full h-auto" src={thanhvien3} alt="Event 6" />
      <img className="max-w-full h-auto" src={thanhvien2} alt="Event 2" />
      <img className="max-w-full h-auto" src={thanhvien4} alt="Event 3" />
    </div>
    <div className="carousel-slide">
      <img className="max-w-full h-auto" src={thanhvien5} alt="Event 4" />
      <img className="max-w-full h-auto" src={thanhvien6} alt="Event 4" />
      <img className="max-w-full h-auto" src={thanhvien7} alt="Event 4" />
    </div>
  </Carousel>
);

const PromotionCarousel = () => (
  <Carousel
    nextArrow={<NextArrow />}
    prevArrow={<PrevArrow />}
    className="carousel-container"
    arrows
    infinite={true}
    lazyLoad="ondemand"
  >
    <div className="carousel-slide">
      <img className="max-w-full h-auto" src={uudai1} alt="Promotion 1" />
      <img className="max-w-full h-auto" src={uudai2} alt="Promotion 1" />
      <img className="max-w-full h-auto" src={uudai3} alt="Promotion 1" />
      <img className="max-w-full h-auto" src={uudai4} alt="Promotion 1" />
    </div>
    <div className="carousel-slide">
      <img className="max-w-full h-auto" src={uudai5} alt="Promotion 2" />
      <img className="max-w-full h-auto" src={uudai6} alt="Promotion 2" />
      <img className="max-w-full h-auto" src={uudai7} alt="Promotion 2" />
      <img className="max-w-full h-auto" src={uudai8} alt="Promotion 2" />
    </div>
  </Carousel>
);

const ListEvents = () => {
  return (
    <div className="mt-10 pt-10">
      <h2 className="text-center text-5xl font-semibold text-gray-300 text-opacity-55 tracking-widest">
        EVENTS
      </h2>
      <div className="flex justify-center mt-10 py-10">
        <Tabs
          className="w-full max-w-screen-lg"
          type="card"
          defaultActiveKey="1"
          unmountInactiveTabs={true}
        >
          <Tabs.TabPane
            tab={
              <div>
                <p className="text-xl font-medium">Thành viên</p>
              </div>
            }
            key="1"
            forceRender={false}
          >
            <MemberCarousel />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <p className="text-xl font-medium">Ưu đãi</p>
              </div>
            }
            key="2"
            forceRender={false}
          >
            <PromotionCarousel />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ListEvents;
