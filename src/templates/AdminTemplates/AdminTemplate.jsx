import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
import { handleGetValueLocalStore } from '../../utils/utils';
const { Header, Content, Footer, Sider } = Layout;

const arrMenu = [
  {
    label: 'Users',
    icon: <i className="fa-solid fa-user"></i>,
  },
  {
    label: 'Films',
    icon: <i className="fa-solid fa-film"></i>,
    // type:'group',
    children: [
      {
        label: <Link to={path.admin.films}>Films</Link>,
        icon: <i className="fa-solid fa-file"></i>,
      },
      {
        label: <Link to={path.admin.addNew}>Add new</Link>,
        icon: <i className="fa-solid fa-plus"></i>,
      },
    ],
  },
  {
    label: 'Showtime',
    icon: <i className="fa-solid fa-tv"></i>,
  },
];

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    // lấy dữ liệu từ local lên để kiểm tra
    // Nếu như localStore không có dữ liệu ==> Đá mông người dùng đi mất
    // Nếu như có dữ liệu và maLoaiNguoiDung không đúng ==> Đá mông người dùng đi mất
    const dataUser = handleGetValueLocalStore('dataUser');
    if (!dataUser) {
      window.location.href = 'https://google.com';
    } else {
      if (dataUser.maLoaiNguoiDung !== 'QuanTri') {
        window.location.href = 'https://google.com';
      }
    }
    // return () => {

    // }
  }, []);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={arrMenu}
        />
      </Sider>
      <Layout>
        {/* Header */}
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
