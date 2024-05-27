import React, { useEffect, useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import { quanLyRapSer } from '../../services/quanLyRapSer';
import '../HeThongLichCumRap/HeThongCumRap.scss'

const HeThongCumRap = ({ maHeThongRap }) => {
  const [arrCumRap, setArrCumRap] = useState([]);
  useEffect(() => {
    console.log(maHeThongRap)
    quanLyRapSer
      .layThongTinLichChieuHeThongRap(maHeThongRap)
      .then((res) => {
        console.log(res);
        setArrCumRap(res.data.content[0].lstCumRap);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [maHeThongRap])

  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div className='he_thong_cum_rap'>
      <Tabs
        tabPosition="left"
        style={{
          height: '600px',
        }}
        items={arrCumRap.map((cumRap, index) => {
          console.log(cumRap);
          return {
            label: (
              <div key={index} className='text-left w-[250px] mx-1'>
                <h3 className='uppercase text-green-600 text-lg font-medium truncate'>{cumRap.tenCumRap}</h3>
                <p className='truncate text-xs'>{cumRap.diaChi}</p>
              </div>
            ),
            key: index,
          };
        })}
      />
    </div>
  )
}

export default HeThongCumRap