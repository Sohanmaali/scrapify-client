import { BiPurchaseTag } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaListUl, FaRegCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdContactSupport, MdLogout, MdMessage } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const sideBarData = [
  {
    url: '/account/dashboard',
    lable: 'Dashboard',
    icon: <RxDashboard />,
  },
  {
    url: '/account/profile',
    lable: 'Profile',
    icon: <FaRegCircleUser />,
  },
  {
    url: '/account/listing',
    lable: 'Listing',
    icon: <FaListUl />,
  },
  {
    url: '/account/purchases',
    lable: 'Purchases',
    icon: <BiPurchaseTag />,
  },
  {
    url: '/account/chat',
    lable: 'Messages',
    icon: <MdMessage />,
  },
  {
    url: '/account/history',
    lable: 'Order History',
    icon: <FaHistory />,
  },
  {
    url: '/account/notification',
    lable: 'Notification',
    icon: <IoNotificationsOutline />,
  },
  {
    url: '/account/support',
    lable: 'Support',
    icon: <MdContactSupport />,
  },
  // {
  //   url: '/account/logout',
  //   lable: 'Log out',
  //   icon: <MdLogout />,
  // },
]

export default sideBarData