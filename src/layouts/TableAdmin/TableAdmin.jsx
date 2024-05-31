// components/TableAdmin/TableAdmin.js
import { Table } from 'antd';

const TableAdmin = () => {
  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      key: 'maPhim',
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      key: 'tenPhim',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      key: 'hinhAnh',
      render: text => <img src={text} alt="film" style={{ width: '100px' }} />,
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <div className="space-x-3">
          <span>
            <button className="py-2 px-5 bg-yellow-300">sửa</button>
          </span>
          <span>
            <button className="py-2 px-5 bg-red-500">Xóa</button>
          </span>
        </div>
      ),
    },
  ];

  return <Table dataSource={arrFilms} columns={columns} rowKey="maPhim" />;
};

export default TableAdmin;
