import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {SVG} from "../../utils/Svgs/Svg"

const Topbar = () => {
  return (
    <div className="min-h-[120px] w-full bg-white border-b border-[#EAEAEA] px-8 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <h1 className="topbar-heading">Dashboard</h1>
      </div>

      {/* Center Search */}
      <div className="w-[513px] max-w-full flex items-center bg-[#F9FAFB] rounded-xl px-4 py-2">
       {SVG.searchIconSvg}

        <input
          type="text"
          placeholder="Search..."
          className="ml-[8px] flex-1 bg-transparent outline-none text-sm"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        
          {SVG.notificationIconSvg}

          

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-12 h-12 rounded-xl object-cover"
          />

          <div>
            <p className="text-sm font-semibold text-black">Musfiq</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>

          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Topbar;