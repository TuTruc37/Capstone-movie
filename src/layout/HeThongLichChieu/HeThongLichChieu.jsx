import { Container } from 'postcss'
import React, { useEffect, useState } from 'react';
import { Space, Tabs } from 'antd';
import { quanLyPhimSer } from '../../services/quanLyPhimSer';
import { quanLyRapSer } from '../../services/quanLyRapSer';


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
            setError('Failed to load videos. Please try again later.');
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
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of Tab ${id}`,
                    };
                })}
            />


        </div >
    )
}

export default HeThongLichChieu