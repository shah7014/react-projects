import { FiTruck } from "react-icons/fi";
import { MdFavorite, MdLocalOffer } from "react-icons/md";
import { AiFillWallet } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

export const DELIVERY = "delivery";
export const PICKUP = "pickup";

export const menuItems = [
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
