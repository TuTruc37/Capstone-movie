// import React, { useEffect, useState } from 'react';
// import { Radio, Space, Tabs } from 'antd';
// import { quanLyRapSer } from '../../services/quanLyRapSer';
// import '../HeThongLichCumRap/HeThongCumRap.scss'


// const HeThongCumRap = ({ maHeThongRap }) => {
//   const [arrCumRap, setArrCumRap] = useState([]);
//   // useEffect(() => {
//   //   console.log(maHeThongRap)
//   //   quanLyRapSer
//   //     .layThongTinLichChieuHeThongRap(maHeThongRap)
//   //     .then((res) => {
//   //       console.log(res);
//   //       setArrCumRap(res.data.content[0].lstCumRap);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     })
//   // }, [maHeThongRap])
//   useEffect(() => {
//     if (idCinema) {
//       listCinema
//         .getListTimeShowTimes(idCinema)
//         .then(res => {
//           // console.log(res);
//           if (res.data && res.data.content && res.data.content.length > 0) {
//             setArrListCinema(res.data.content[0].lstCumRap);
//           } else {
//             console.error('Unexpected response format', res);
//           }
//         })
//         .catch(err => {
//           console.error('Error fetching cinema list', err);
//         });
//     }
//   }, [idCinema]);


//   const [tabPosition, setTabPosition] = useState('left');
//   const changeTabPosition = (e) => {
//     setTabPosition(e.target.value);
//   };
//   return (
//     <div>
//       <Tabs
//         tabPosition="top"
//         items={arrListCinema.map((item, index) => ({
//           label: (
//             <div className="list-cinema-content" key={index}>
//               <h3 className="text-red-500 list-cinema-heading font-medium text-2xl">
//                 {item.tenCumRap}
//               </h3>
//               <p className="text-white text-lg list-cinema-title truncate w-[600px]">
//                 {item.diaChi}
//               </p>
//             </div>
//           ),
//           key: index,
//           children: (
//             <div className=" list-cinema grid grid-cols-3 space-x-5 overflow-y-scroll h-[600px]">
//               {item.danhSachPhim.map((item, index) => {
//                 return (
//                   item.dangChieu && (
//                     <div key={index} className="flex my-5 ">
//                       <div className="mr-5">
//                         <img
//                           className="h-40 w-40 object-cover  overflow-hidden"
//                           src={item.hinhAnh}
//                           alt=""
//                         />
//                       </div>
//                       <div className="">
//                         <h3 className="flex items-center space-x-2">
//                           <span className="text-white px-5 py-1 rounded font-semibold bg-red-500">
//                             C18
//                           </span>
//                           <span className="text-white flex text-xl font-bold">
//                             {item.tenPhim}
//                           </span>
//                         </h3>
//                         <div className="list-cinema-bottom mt-3 grid grid-cols-2 gap-5">
//                           {item.lstLichChieuTheoPhim
//                             .slice(0, 4)
//                             .map((item, index) => {
//                               return (
//                                 <div
//                                   className="text-white list-cinema-content-bottom "
//                                   key={index}
//                                 >
//                                   <div className=" flex list-cinema-time text-md font-semibold py-2  px-4 rounded whitespace-nowrap  bg-slate-500">
//                                     {moment(item.ngayChieuGioChieu).format(
//                                       ' DD-MM-YYYY '
//                                     )}
//                                    <div className='ml-1 list-cinema-time-pc'>
//                                    {moment().format( " ~ hh:mm ")}
//                                    </div>
//                                   </div>
//                                   <div className="  flex list-cinema-number text-lg font-semibold">
//                                     {item.tenRap} 
//                                     <div className=' list-cinema-time-mobile   font-semibold'>
//                                       {moment().format(" - hh:mm")}
//                                     </div>
//                                   </div>
//                                 </div>
//                               );
//                             })}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 );
//               })}
//             </div>
//           ),
//         }))}
//       />
//     </div>
//   );
// }

// export default HeThongCumRap