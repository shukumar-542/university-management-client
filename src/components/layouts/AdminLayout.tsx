
import { Layout, Menu, MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
// import { createElement } from 'react';

const { Header, Content, Footer, Sider } = Layout;


const items: MenuProps["items"] = [
  {
    key: 1,
    label: 'Dashboard'
  },
  {
    key: 2,
    label: 'Profile'
  },
  {
    key: 3,
    label: 'User management',
    children: [
      {
        key: 22,
        label: 'Create admin'
      },
      {
        key: 33,
        label: 'Create student'
      },
    ]
  },
]

const AdminLayout = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{
          color: 'white',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <h1>PH Uni</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout style={{height : '100vh'}}>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;