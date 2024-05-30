import React, { useEffect, useState } from 'react';
import TableAdmin from '../../../layouts/TableAdmin/TableAdmin';
import { quanLyNguoiDungServ } from '../../../services/quanLyNguoiDungServ';
const FilmsManager = () => {
  const [arrFilms, setArrFilms] = useState([]);
  useEffect(() => {
    handleGetAllUser();
  }, []);
  const handleGetAllUser = () => {
    quanLyNguoiDungServ
      .layDanhSachNguoiDung()
      .then(res => {
        console.log(res);
        setArrFilms(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="py-16">
      <h1 className="text-2xl font-bold">Quản lý phim</h1>
      <button className="py-2 px-5 bg-blue-500 hover:bg-blue-700 text-white rounded">
        Thêm phim
      </button>
      <TableAdmin arrFilms={arrFilms} />
    </div>
  );
};

export default FilmsManager;
