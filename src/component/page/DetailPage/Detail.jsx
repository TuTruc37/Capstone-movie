// import React from 'react'
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons'
import { Rate } from 'antd'
import Tag from '../../Tag';
import React, { useEffect, useState } from 'react'
import Trailer from '../../../layout/Trailer/Trailer'
import { listMovieServices } from '../../../services/listMovieService'
import ShowTimes from '../../../layout/showTimes/ShowTimes'


const Detail = () => {

  const [arrItem, setArrItem] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    listMovieServices
      .getTrailer()
      .then((res) => {
        // console.log(res);
        setArrItem(res.data.content);
      })
      .catch((error) => {
        // console.log(error);
        setError('Failed to load. Please try again later.');
      })
  }, []);
  return (
    <div className='bg-black'>
      {/* Trailer  */}
      <Trailer />

      {/* Thong tin phim  */}
      <div>
        {error && <div>{error}</div>}
        <div>
          {arrItem.length > 0 ? (
            arrItem.map((item, index) => (
              <div key={index}>
                <div className="flex mx-48">
                  <img src={item.hinhAnh} alt="" className="-my-10 w-64 h-96" />

                  <div className="mx-10 grow h-14 text-white">
                    <h1 className="text-4xl my-2">{item.tenPhim}</h1>
                    <div className="flex">
                      <div>
                        <FieldTimeOutlined className="mx-2" />
                        <span>120 phút</span>
                      </div>
                      <div className="mx-4">
                        <CalendarOutlined className="mx-2" />
                        <div>
                          <p>{item.ngayKhoiChieu}</p>
                        </div>
                      </div>
                    </div>
                    <Rate className="my-2" value={item.danhGia} />
                    <div className="flex my-2">
                      <p>Thể loại:</p>
                      <div className="mx-5">
                        <Tag />
                      </div>
                    </div>
                    <p>Ngôn ngữ: Tiếng Anh</p>
                    <div className="flex my-2">
                      <p>Đạo diễn:</p>
                      <div className="mx-5">
                        <Tag />
                      </div>
                    </div>
                    <div className="flex my-2">
                      <p>Diễn viên:</p>
                      <div className="mx-5">
                        <Tag />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nội dung phim */}
                <div className="mx-40 my-20 mr-96 text-white">
                  <h2 className="text-2xl">Nội dung phim</h2>
                  <p className="mr-38 my-4">{item.moTa}</p>
                </div>
              </div>
            ))
          ) : (
            <div className='text-white'>Không có video nào.</div>
          )}
        </div>
      </div>




      {/* Lich chieu  */}

      <div className='mx-40  text-white'>
        {/* <HeThongLichChieu /> */}
        <ShowTimes />
      </div>
    </div>

  )
}

export default Detail