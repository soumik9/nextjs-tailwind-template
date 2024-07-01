import { MdOutlineSpaceDashboard, MdEmojiTransportation } from "react-icons/md";
import { PiUserSwitchLight } from "react-icons/pi";
import { DASHBOARD_LINKS, DEMO_LINKS, USER_LINKS } from "../enum/link";
import { cx } from "../hooks/helper";

// *dashboard layouts
export const dashboardLayoutUrls = [
    ...Object.values(DASHBOARD_LINKS),
    ...Object.values(USER_LINKS),
    ...Object.values(DEMO_LINKS),
];

// *dashboard sdebar icon size
export const iconSize = 'lg:text-[24px] text-[20px]'

// *dashboard sidebar menu items
export const dashboardMenuItems = [
    {
        to: DASHBOARD_LINKS.DASHBOARD,
        text: "Dashboard",
        icon: <MdOutlineSpaceDashboard className={cx(iconSize)} />,
        activeLinks: [
            ...Object.values(DASHBOARD_LINKS),
        ]
    },
    {
        to: USER_LINKS.USER,
        text: "Users",
        icon: <PiUserSwitchLight className={cx(iconSize)} />,
        activeLinks: [
            ...Object.values(USER_LINKS),
        ]
    },
    {
        to: DEMO_LINKS.DEMO,
        text: "Demo",
        icon: <MdEmojiTransportation className={cx(iconSize)} />,
        activeLinks: [
            ...Object.values(DEMO_LINKS),
        ]
    },
];