// import { Container } from 'postcss'
// import React, { useEffect, useState } from 'react';
// import { Space, Tabs } from 'antd';
// import { quanLyPhimSer } from '../../services/quanLyPhimSer';
// import { quanLyRapSer } from '../../services/quanLyRapSer';
// import './heThongLichChieu.scss';
// import HeThongCumRap from '../../component/HeThongLichCumRap/HeThongCumRap';


// const HeThongLichChieu = () => {
//     const [arrRap, setArrRap] = useState([]);
//     const [error, setError] = useState(null);
//     const [maHeThongRap, setMaHeThongRap] = useState('');
// // console.log(maHeThongRap);
//     useEffect(() => {
//         quanLyRapSer
//           .layThongTinHeThongRap()
//           .then((res) => {
//             // console.log(res);
//             setArrRap(res.data.content);
//             // setMaHeThongRap(res.date.content[0].maHeThongRap);
//           })
//           .catch((error) => {
//             // console.log(error);
//             setError('Failed to load Rap. Please try again later.');
//           })
//       }, []);
//     return (
//         <div>
//             <Space
//                 style={{
//                     marginBottom: 24,
//                 }}
//             >

//             </Space>
//             <Tabs
//                 tabPosition={'left'}
//                 items={arrRap.map((rap, index)=> {
//                     return {
//                         label: <img className='w-16 he_thong_lich_chieu' src={rap.logo} />,
//                         key: rap.maHeThongRap,
//                         children: <HeThongCumRap maHeThongRap={rap.maHeThongRap}/>
//                     }
//                 })}                
//                 // onChange={activeKey=> {
//                 //     // console.log(activeKey);
//                 //     // setMaHeThongRap(activeKey);
//                 // }}
//             />


//         </div >
//     )
// }

// export default HeThongLichChieu