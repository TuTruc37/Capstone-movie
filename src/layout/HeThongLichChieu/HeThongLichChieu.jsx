import { Container } from 'postcss'
import React, { useEffect, useState } from 'react';
import { Space, Tabs } from 'antd';
import { quanLyPhimSer } from '../../services/quanLyPhimSer';
import { quanLyRapSer } from '../../services/quanLyRapSer';
import './heThongLichChieu.scss';


const HeThongLichChieu = () => {
    const [arrRap, setArrRap] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        quanLyRapSer
          .layThongTinHeThongRap()
          .then((res) => {
            console.log(res);
            setArrRap(res.data.content);
          })
          .catch((error) => {
            console.log(error);
            setError('Failed to load Rap. Please try again later.');
          })
      }, []);
    return (
        <div>
            <Space
                style={{
                    marginBottom: 24,
                }}
            >

            </Space>
            <Tabs
                tabPosition={'left'}
                items={arrRap.map((rap, index)=> {
                    return {
                        label: <img className='w-16 he_thong_lich_chieu' src={rap.logo} />,
                        key: index,
                        children: 'hello guys'
                    }
                })}                
            />


        </div >
    )
}

export default HeThongLichChieu