// TableAdmin.jsx
import { Table } from 'antd';
import React, { useContext } from 'react';
import { AlertContext } from '../../App';
import { path } from '../../common/path';
import { Link } from 'react-router-dom';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';

const TableAdmin = ({ arrFilms, handleGetAllUser }) => {
  const { handleAlert } = useContext(AlertContext);

  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: hinhAnh => (
        <img src={hinhAnh} alt="Hình ảnh" className='w-[900px]' />
      ),
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => a.tenPhim.localeCompare(b.tenPhim),
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
    },
    {
      title: 'Chức năng',
      render: (text, record) => (
        <div className="flex">
          <button className="py-2 px-4 rounded text-white bg-yellow-300 mr-3">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="py-2 px-4 rounded text-white bg-red-500 mr-3">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={arrFilms} rowKey="maPhim" />;
};

export default TableAdmin;
