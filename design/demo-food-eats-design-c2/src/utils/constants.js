import { FiTruck } from "react-icons/fi";
import { MdFavorite, MdLocalOffer } from "react-icons/md";
import { AiFillWallet } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

export const DELIVERY = "delivery";
export const PICKUP = "pickup";

export const HERO_IMAGE =
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const MENU_ITEMS = [
  {
    icon: <FiTruck className="text-xl" />,
    text: "Orders",
    path: "/some",
    id: 1,
  },
  {
    icon: <MdFavorite className="text-xl" />,
    text: "Favorites",
    path: "/",
    id: 2,
  },
  {
    icon: <AiFillWallet className="text-xl" />,
    text: "Wallet",
    path: "/some",
    id: 3,
  },
  {
    icon: <BiHelpCircle className="text-xl" />,
    text: "Help",
    path: "/",
    id: 4,
  },
  {
    icon: <MdLocalOffer className="text-xl" />,
    text: "Promotions",
    path: "/some",
    id: 5,
  },
  {
    icon: <BsFillCloudDownloadFill className="text-xl" />,
    text: "Best One",
    path: "/",
    id: 6,
  },
  {
    icon: <FaUserFriends className="text-xl" />,
    text: "Invite Friends",
    path: "/some",
    id: 7,
  },
];

export const FOOD_OFFERS = [
  {
    img: "https://plus.unsplash.com/premium_photo-1675451537385-e76cd7e78087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sun's Out,BOGO's Out",
    subtitle: "Through 8/26",
    id: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphcGFuZXNlJTIwbm9vZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Japanese food",
    subtitle: "Also available",
    id: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "We deliver desserts too",
    subtitle: "Tasty Treats",
    id: 3,
  },
];
