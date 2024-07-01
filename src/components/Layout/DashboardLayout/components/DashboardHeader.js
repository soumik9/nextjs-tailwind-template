// import useAuthLogout from "../../hooks/useAuthLogout";
import HumburgerBtn from "../partials/HumburgerBtn";
import { useState } from "react";
import UserDropdown from "../partials/UserDropdown";
import { cx } from "@/utils/hooks/helper";
import { useSelector } from "react-redux";
import ThemeController from "../partials/ThemeController";

const DashboardHeader = ({ open, setOpen }) => {

    // *global
    const global = useSelector((state) => state.global);

    // *states
    const [showAVDropdown, setShowAVDropdown] = useState(false);

    return (
        <div className={cx(
            global.isDark ? "bg-blueNight border-b" : "bg-slate-300",
            "py-5 w-full flex justify-between items-center px-8",
        )}>

            { /* *Note This is a note about this section */}
            <HumburgerBtn
                open={open}
                setOpen={setOpen}
                isDark={global.isDark}
            />

            <div className="flex items-center gap-x-10">

                <ThemeController />

                <UserDropdown
                    showAVDropdown={showAVDropdown}
                    setShowAVDropdown={setShowAVDropdown}
                />

            </div>
        </div>
    )
}

export default DashboardHeader