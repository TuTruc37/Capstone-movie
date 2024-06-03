import React, { useContext, useEffect, useState } from 'react';
import { Form, Table } from 'antd';
import { quanLyNguoiDungServ } from '../../../services/quanLyNguoiDungServ';
import { AlertContext } from '../../../App';
import { Link } from 'react-router-dom';
import { path } from '../../../common/path';
const EditableCell = ({ editing, dataIndex, children }) => {
  return (
    <td>
      {editing ? (
        <Form.Item
          taiKhoan={dataIndex}
          style={{
            margin: 0,
          }}
        ></Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const UserManage = () => {
  const { handleAlert } = useContext(AlertContext);
  const [form] = Form.useForm();
  const [arrUser, setArrUser] = useState([]);
  console.log(arrUser);
  useEffect(() => {
    handleGetAllUser();
  }, []);
  const handleGetAllUser = () => {
    quanLyNguoiDungServ
      .layDanhSachNguoiDung()
      .then(res => {
        console.log(res);
        setArrUser(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [editingKey, setEditingKey] = useState('');
  const isEditing = record => record.key === editingKey;
  const cancel = () => {
    setEditingKey('');
  };

  const columns = [
    {
      title: 'STT',
      render: (text, record, index) => {
        return index + 1;
      },
      width: '5%',
      editable: true,
    },
    {
      title: 'taiKhoan',
      dataIndex: 'taiKhoan',
      width: '15%',
      editable: true,
    },
    {
      title: 'matKhau',
      dataIndex: 'matKhau',
      width: '15%',
      editable: true,
    },
    {
      title: 'hoTen',
      dataIndex: 'hoTen',
      width: '15%',
      editable: true,
    },
    {
      title: 'email',
      dataIndex: 'email',
      width: '20%',
      editable: true,
    },
    {
      title: 'soDT',
      dataIndex: 'soDT',
      width: '10%',
      editable: true,
    },
    {
      title: 'Chức năng',
      dataIndex: 'taiKhoan',
      width: '20%',
      render: (text, record) => {
        // console.log(record);
        return (
          <>
            <button className="py-2 px-4 rounded text-white bg-yellow-600 mr-3">
              Sửa
            </button>
            <button
              onClick={() => {
                quanLyNguoiDungServ
                  .xoaNguoiDung(text)
                  .then(res => {
                    console.log(res);
                    handleGetAllUser();
                    handleAlert('success', 'Đã xoá thành công');
                  })
                  .catch(err => {
                    console.log(err);
                    handleAlert('error', err.response.data.content);
                  });
              }}
              className="py-2 px-4 rounded text-white bg-red-600"
            >
              Xoá
            </button>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <div className="py-16">
      <div>
        {/* Không chuyển link được bị đứng luôn */}
        <Link to={path.admin.quanLyNguoiDung}>
          <button
            className="py-2 px-5 bg-blue-500 hover:bg-blue-700 text-white rounded mb-5"
            type="submit"
          >
            <i className="fas fa-plus-circle"></i> Thêm người dùng
          </button>
        </Link>
      </div>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={arrUser}
          columns={mergedColumns}
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  );
};

export default UserManage;
