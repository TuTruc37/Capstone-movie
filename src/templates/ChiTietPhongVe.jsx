import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layouts/header/Header';
import Footer from '../layouts/footer/Footer';
import { chiTietPhongVe } from '../services/quanLyPhongVe';
import screenImg from '../assets/imgs/bg-screen.png';

const ChiTietPhongVe = () => {
  const { maLichChieu } = useParams();

  const [data, setData] = useState();
  const [gheDaChon, setGheDaChon] = useState([]);
  const [total, setTotal] = useState(0);
  const [danhSachGheDaChon, setDanhSachGheDaChon] = useState([]);

  useEffect(() => {
    chiTietPhongVe.thongTinLichChieu(maLichChieu).then(res => {
      setData(res.data);
    });
  }, []);

  const chonGhe = stt => {
    if (!gheDaChon.includes(stt)) {
      setGheDaChon([...gheDaChon, stt]);
    } else {
      setGheDaChon(gheDaChon.filter(ghe => ghe !== stt));
    }
  };

  useEffect(() => {
    let tongTien = 0;
    let gheDaChonMoi = [];

    data?.content?.danhSachGhe.forEach(ghe => {
      if (gheDaChon.includes(ghe.stt)) {
        tongTien += ghe.giaVe;
        gheDaChonMoi.push(`${ghe.stt} - ${ghe.giaVe}`);
      }
    });

    setDanhSachGheDaChon(gheDaChonMoi);
    setTotal(tongTien);
  }, [gheDaChon]);

  return (
    <>
      <Header />

      <div className="flex justify-center mb-10">
        <div className="w-2/3 flex">
          <div className="w-2/3">
            <div>
              <div className="flex space-x-5 mt-10">
                <div>
                  <div className="bg-slate-100 w-[40px] h-[40px] rounded-md flex items-center justify-center"></div>{' '}
                  Ghế thường
                </div>

                <div>
                  <div className="bg-orange-400 w-[40px] h-[40px] rounded-md flex items-center justify-center"></div>{' '}
                  Ghế Vip
                </div>
                <div>
                  <div className="bg-green-400 w-[40px] h-[40px] rounded-md flex items-center justify-center"></div>{' '}
                  Ghế Đang Chọn
                </div>
                <div>
                  <div className="bg-red-400 w-[40px] h-[40px] rounded-md flex items-center justify-center"></div>{' '}
                  Ghế Đã Chọn
                </div>
              </div>
              <img src={screenImg} className="mt-10" />

              <div className="mt-10 grid grid-cols-12 gap-4">
                {data?.content?.danhSachGhe?.map(ghe => (
                  <button
                    key={ghe.stt}
                    className={`${
                      ghe.daDat === true
                        ? 'bg-red-400'
                        : gheDaChon.includes(ghe.stt)
                        ? 'bg-green-400'
                        : ghe.loaiGhe === 'Vip'
                        ? 'bg-orange-400'
                        : 'bg-slate-100'
                    } w-[40px] h-[40px] rounded-md flex items-center justify-center`}
                    onClick={() => chonGhe(ghe.stt)}
                    disabled={ghe.daDat}
                  >
                    {ghe.stt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/3 bg-slate-100 rounded-lg p-5">
            <h1 className="flex justify-center font-bold mb-10">
              {data?.content?.thongTinPhim?.tenPhim}
            </h1>
            <div className="flex justify-between items-center border-t-2 border-b-2 border-dashed p-2">
              <div>
                Ngày chiếu - Giờ Chiếu: {data?.content?.thongTinPhim?.ngayChieu}
                :
              </div>
              <p className="text-orange-400">
                {data?.content?.thongTinPhim?.gioChieu}
              </p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-dashed p-2">
              <div>Cụm rạp: </div>
              <p className="text-orange-400">
                {data?.content?.thongTinPhim?.tenCumRap}
              </p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-dashed p-2">
              <div>Rạp:</div>
              <p className="text-orange-400">
                {data?.content?.thongTinPhim?.tenRap}
              </p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-dashed p-2">
              <div>Ghế Chọn:</div>
              <p className="text-orange-400">{danhSachGheDaChon.join(', ')}</p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-dashed p-2">
              <div>Ưu đãi:</div>
              <p className="text-orange-400">0%</p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-dashed p-2">
              <div>Tổng tiền:</div>
              <p className="text-orange-400">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(total)}
              </p>
            </div>

            <button className="w-full bg-orange-400 text-white rounded-md px-5 py-2 mt-4">
              Đồng Ý
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ChiTietPhongVe;
