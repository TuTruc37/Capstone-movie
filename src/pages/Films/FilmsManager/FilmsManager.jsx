import React, { useEffect, useState } from 'react';
import TableAdmin from '../../../layouts/TableAdmin/TableAdmin';
import { quanLyNguoiDungServ } from '../../../services/quanLyNguoiDungServ';
import { Link } from 'react-router-dom';
import { path } from '../../../common/path';
const FilmsManager = () => {
  const [arrFilms, setArrFilms] = useState([]);
  useEffect(() => {
    handleGetAllUser();
  }, []);
  const handleGetAllUser = () => {
    quanLyNguoiDungServ
      .LayDanhSachPhim()
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
      <button className="py-2 px-5 bg-blue-500 hover:bg-blue-700 text-white rounded my-5">
        <Link to={path.admin.addNew}>
          <i className="fas fa-plus-circle"></i> Thêm phim
        </Link>
      </button>
      <TableAdmin arrFilms={arrFilms} handleGetAllUser={handleGetAllUser} />
    </div>
  );
};

export default FilmsManager;
