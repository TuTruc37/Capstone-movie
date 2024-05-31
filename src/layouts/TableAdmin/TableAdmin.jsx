import React from 'react';
import { Table } from 'antd';

const TableAdmin = ({ arrFilms, onDeleteFilm }) => {
  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      sorter: {
        compare: (a, b) => a.maPhim - b.maPhim,
        multiple: 1,
      },
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: hinhAnh => (
        <img src={hinhAnh} alt="Hình ảnh" style={{ width: 50, height: 70 }} />
      ),
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: {
        compare: (a, b) => a.tenPhim.localeCompare(b.tenPhim),
        multiple: 1,
      },
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
    },
    {
      title: 'Chức năng',
      dataIndex: 'maPhim',
      render: maPhim => (
        <div className="flex">
          <button
            className="py-2 px-4 rounded text-white bg-red-500 mr-3"
            onClick={() => onDeleteFilm(maPhim)} // Gọi hàm onDeleteFilm để xóa phim
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={arrFilms}
      rowKey="maPhim" // Sử dụng maPhim làm key cho các hàng
      pagination={{
        defaultPageSize: 20,
      }}
    />
  );
};

export default TableAdmin;
