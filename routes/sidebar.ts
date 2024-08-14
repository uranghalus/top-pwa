import { IconType } from 'react-icons';
import {
  RiApps2Fill,
  RiBuildingLine,
  RiDatabase2Line,
  RiUserLine,
} from 'react-icons/ri';

interface Route {
  path: string;
  icon: IconType;
  name: string;
  submenu?: Route[];
}
const routes: Route[] = [
  {
    path: '/overview',
    icon: RiApps2Fill,
    name: 'Dashboard',
  },
  {
    path: '',
    icon: RiDatabase2Line,
    name: 'Master Data',
    submenu: [
      {
        path: '/overview/master-department',
        icon: RiBuildingLine,
        name: 'Data Departement',
      },
      {
        path: '/overview/master-user',
        icon: RiUserLine,
        name: 'Data Pengguna',
      },
    ],
  },
];
export default routes;
