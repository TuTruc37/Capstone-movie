import React, { useEffect, useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import { quanLyRapSer } from '../../services/quanLyRapSer';

const HeThongCumRap = ({maHeThongRap}) => {
useEffect(()=>{
  quanLyRapSer
  .layThongTinLichChieuHeThongRap(maHeThongRap)
  .then((res)=>{

  })
  .catch((err)=> {
    
  })
},[])

    const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div>
        <Tabs
        tabPosition="left"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </div>
  )
}

export default HeThongCumRap