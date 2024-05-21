import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'





const Fooder = () => {
    return (
        <div className=' bg-slate-800 '>
            <div className='flex flex-nowrap text-white my-10'>                
                <div className='w-1/3'>

                </div>
                {/* Gioi thieu  */}
                <div className='w-1/3'>
                    <h2 className='my-5'>GIỚI THIỆU</h2>
                    <div className='flex flex-col  '>
                        <a className='my-2' href="#" name="">Về Chúng Tôi</a>
                        <a className='my-2' href="#" name="">Thỏa Thuận Sử Dụng</a>
                        <a className='my-2' href="#" name="">Quy Chế Hoạt Động</a>
                        <a className='my-2' href="#" name="">Chính Sách Bảo Mật</a>

                    </div>

                </div>
                {/* Goc dien anh  */}
                <div className='w-1/3'>
                    <h2 className='my-5'>GÓC ĐIỆN ẢNH</h2>
                    <div className='flex flex-col  '>
                        <a className='my-2' href="#" name="">Thể Loại Phim</a>
                        <a className='my-2' href="#" name="">Bình Luận Phim</a>
                        <a className='my-2' href="#" name="">Blog Điện Ảnh</a>
                        <a className='my-2' href="#" name="">Phim Hay Tháng</a>
                    </div>


                </div>
                {/* ho tro  */}
                <div  className='w-1/3'>
                    <h2 className='my-5'>HỖ TRỢ</h2>
                    <div className='flex flex-col  '>
                        <a className='my-2' href="#" name="">Góp Ý</a>
                        <a className='my-2' href="#" name="">Sale & Services</a>
                        <a className='my-2' href="#" name="">Rạp / Giá Vé </a>
                        <a className='my-2' href="#" name="">Tuyển Dụng</a>

                    </div>

                </div>
                {/* icon  */}
                <div className='w-1/3 my-20'>
                    <h1 className='my-4'>Icon thương hiệu </h1>
                    <div className='flex flex-nowrap'>
                        <div className='w-10'>
                            <FacebookOutlined style={{ fontSize: '32px' }} />
                        </div>
                        <div className='w-10'>
                            <InstagramOutlined style={{ fontSize: '32px' }} />
                        </div>
                        <div className='w-10'>
                            <YoutubeOutlined style={{ fontSize: '32px' }} />
                        </div>
                    </div>



                </div>
                <div className='w-1/3'>

                </div>
            </div>
            <div>
                <div className="border-t-2  border-y-indigo-50 my-7 w-3/5 mx-64 "></div>

                <div className='w-4/5 mx-28 '   >
                    <div className='w-4/5 mx-96  '>
                        <Input />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Fooder