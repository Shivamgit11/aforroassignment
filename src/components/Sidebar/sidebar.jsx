import { useState } from "react";
import { navItems } from "../../data/chartData.js";
import { SVG } from "../../utils/Svgs/Svg";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="sidebar-layout">
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          minHeight: "120px"
        }}
      >
        <div className="sidenav-logo">{SVG.logoSvg}</div>
        <span className="sidenav-logo-text">Dabang</span>
      </div>

      {/* Nav Items */}
      <nav   style={{
    paddingTop: "32px",
    paddingBottom: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
  }}>
        {navItems.map(({ icon, inactiveIcon, label , link}) => (
          <NavLink
          end
                                            to={link}
            key={label}
            onClick={() => setActiveNav(label)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              padding: "16px 24px",
              cursor: "pointer",
              
              borderRadius: 16,
              fontSize: 18,
              fontWeight: activeNav === label ? 600 : 400,
              background: activeNav === label ? "#5D5FEF" : "transparent",
              color: activeNav === label ? "#fff" : "#555",
              transition: "all 0.15s",
            }}
          >
            <span>
              {activeNav === label ? icon : inactiveIcon ?? icon}
            </span>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Upgrade Card */}
      <div
        style={{
          margin: "16px 12px 8px",
          background: "linear-gradient(135deg,#6c63ff,#a78bfa)",
          borderRadius: 14,
          padding: "18px 14px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 22, marginBottom: 6 }}>⚡</div>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>
          Dabang Pro
        </div>
        <div style={{ fontSize: 11, opacity: 0.85, marginBottom: 12 }}>
          Get access to all features
        </div>
        <button
          style={{
            background: "#fff",
            color: "#6c63ff",
            border: "none",
            borderRadius: 8,
            padding: "7px 20px",
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            width: "100%",
          }}
        >
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;