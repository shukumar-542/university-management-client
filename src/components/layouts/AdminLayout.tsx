
import { Layout,  } from 'antd';
import {  Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
// import { createElement } from 'react';

const { Header, Content, Footer, } = Layout;


// const items: MenuProps["items"] = [
//   {
//     key: 'Dashboard',
//     label: <NavLink to='/admin/dashboard'>Dashboard</NavLink> 
//   },
  
//   {
//     key: 'User Management',
//     label: 'User management',
//     children: [
//       {
//         key: 'Create Admin',
//         label: <NavLink to='/admin/create-admin'>Create admin</NavLink> 
//       },
//       {
//         key: 'Create faculty',
//         label: <NavLink to='/admin/create-faculty'>Create faculty</NavLink> 
//       },
//       {
//         key: 'Create student',
//         label: <NavLink to='/admin/create-student'>Create student</NavLink> 
//       },
      
     
     
//     ]
//   },
// ]

const AdminLayout = () => {
  return (
    <Layout>
      <Sidebar />
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