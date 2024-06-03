import React, { useEffect, useState } from 'react';
import { quanLyNguoiDungServ } from '../../services/quanLyNguoiDungServ';
const HistoryData = () => {
  const [history, setHistory] = useState([]);
  console.log(history);
  // console.log(setHistory);
  useEffect(() => {
    TTTK();
  }, []);
  const TTTK = () => {
    quanLyNguoiDungServ
      .thongTinTaiKhoan()
      .then(res => {
        console.log(res.data.content);
        setHistory(res.data.content);
      })
      .catch(err => {
        console.log(err); // lỗi vượt quá thời gian chờ 30000ms
      });
  };
  return (
    <ul>
      hello
      {history.map((lichSu, index) => (
        <li key={index}>
          <div className="history_item">
            <div className="history_img">
              <a href="#">
                <img src={lichSu.taiKhoan} alt={lichSu.hoTen} />
              </a>
            </div>
            {/* <div className="history_content">
              <h2>
                <a href="#" title={lichSu.hoTen}>
                  {lichSu.hoTen}
                </a>
              </h2>
            </div> */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HistoryData;
