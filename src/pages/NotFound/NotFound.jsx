import React from 'react';
import Lottie from 'lottie-react';
import NotFoundAnimation from '../../assets/animation/NotFoundAnimation.json';
import { Link } from 'react-router-dom';
import { path } from '../../common/path';
const NotFound = () => {
  return (
    <div className="grid grid-cols-5 h-screen bg-black">
      <div></div>
      <div className="flex flex-col col-span-3">
        {/* animation  */}
        <Lottie animationData={NotFoundAnimation} loop={true} />
        {/* button */}
        <Link
          to={path.dangNhap}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center"
        >
          <button>Trở về trang đăng nhập</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
