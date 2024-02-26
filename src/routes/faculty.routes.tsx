import FacultyDashboard from "../pages/facualty/FacultyDashboard";
import OfferedCourse from "../pages/facualty/OfferedCourse";

export const facultyPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <FacultyDashboard />,
    },
    {
      name: 'Offered Course',
      path: 'offered-course',
      element: <OfferedCourse />,
    },
]