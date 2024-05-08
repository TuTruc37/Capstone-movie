// import React from 'react'
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons'
import Image from '../asset/image/luca.jpeg'
import Trailer from './Trailer'
import { Rate } from 'antd'
import Tag from '../component/Tag'
const Detail = () => {
  return (
    <div className='bg-slate-400'>
      {/* Trailer  */}
      <Trailer />

      {/* Thong tin phim  */}
      <div>


        <div className='flex mx-36'>

          <img src={Image} alt="" className='-my-10 w-c' />

          <div className='mx-10 grow h-14 text-white'>
            <h1 className='text-4xl my-2'>MÙA HÈ CỦA LUCA</h1>
            <div className='flex'>
              <div >
                <FieldTimeOutlined className='mx-2 ' />
                <span>120p</span>
              </div>
              <div className='mx-4'>
                <CalendarOutlined className='mx-2' />
                <span>4/4/2024</span>
              </div>
            </div>
            <Rate className='my-2' />
            <div className='flex my-2' >
              <p>Thể loại:  </p>
              <div className='mx-5'>
                <Tag />
              </div>

            </div>

            <p>Ngôn ngữ: Tieng Anh</p>
            <div className='flex my-2'>
              <p>Đạo diễn:  </p>
              <div className='mx-5'>
                <Tag />
              </div>
            </div>
            <div className='flex my-2'>
              <p>Diễn viên:  </p>
              <div className='mx-5'>
                <Tag />
              </div>
            </div>



          </div>
        </div>
      </div>

      {/* Noi dung phim  */}
      <div className='mx-40 my-20 mr-96 text-white'>
        <h2 className='text-2xl'>Noi dung phim</h2>
        <p className='mr-38 my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero non sit animi odit laudantium cupiditate recusandae explicabo repellendus mollitia eligendi veritatis illo labore, omnis molestias obcaecati ipsum, maiores ducimus nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestiae hic quam alias deleniti, soluta delectus consequuntur aspernatur quos possimus dolores sequi sapiente nulla, adipisci quas pariatur sunt at iure!</p>
      </div>

      {/* Lich chieu  */}
      <div className='mx-40  text-white'>
        <h2 className='text-2xl'>Lich chieu phim</h2>
      </div>
    </div>

  )
}

export default Detail