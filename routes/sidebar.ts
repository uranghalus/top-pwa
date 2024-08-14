import { IconType } from 'react-icons';
import { RiApps2Fill, RiDatabase2Line, RiUserLine } from 'react-icons/ri';

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
        path: '/overview/master-user',
        icon: RiUserLine,
        name: 'Data Pengguna',
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
