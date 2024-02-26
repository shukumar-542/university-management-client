import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { sidebarItemGenerator } from '../../utils/sidebarItemGenerator';
import { adminPath2 } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';


const role ={
    ADMIN : 'admin',
    FACULTY : 'faculty' ,
    STUDENT :'student',
}

const Sidebar = () => {
    
    const userRole = 'admin'
    let sidebarItem
    switch (userRole) {
        case role.ADMIN:
            sidebarItem = sidebarItemGenerator(adminPath2, role.ADMIN)
            break;
        case role.FACULTY:
            sidebarItem = sidebarItemGenerator(facultyPaths, role.FACULTY)
            break;
        case role.STUDENT:
            sidebarItem = sidebarItemGenerator(studentPaths, role.STUDENT)
            break;
    
        default:
            break;
    }

    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        
       
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItem} />
      </Sider>
    );
};

export default Sidebar;