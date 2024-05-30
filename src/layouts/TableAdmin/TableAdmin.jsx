import { Table } from 'antd';
import React, { useContext } from 'react';
import { AlertContext } from '../../App';
const TableAdmin = ({ arrFilms }) => {
  console.log(arrFilms);
  const { handleAlert } = useContext(AlertContext);
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
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: {
        compare: (a, b) => a.tenPhim - b.tenPhim,
        multiple: 1,
      },
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
    },
    {
      title: 'Chức năng',
      dataIndex: 'taiKhoan',
      render: (text, record) => {
        // console.log(record);
        return (
          <>
            <button className="py-2 px-4 rounded text-white bg-yellow-600 mr-3">
              <i className="fa-solid fa-pen"></i>
            </button>
            <button className="py-2 px-4 rounded text-white bg-red-600 mr-3">
              <i className="fa-solid fa-trash"></i>
            </button>
          </>
        );
      },
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={arrFilms}
        pagination={{
          defaultPageSize: 20,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default TableAdmin;
