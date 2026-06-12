import { navItems } from "../../data/chartData.js";

const Sidebar = ({ activeNav, setActiveNav }) => (
  <div style={{
    width: 200,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "24px 0",
    boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
    flexShrink: 0,
  }}>
    {/* Logo */}
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 20px 28px" }}>
      <div style={{
        width: 36, height: 36,
        background: "#5D5FEF",
        borderRadius: 10, display: "flex", alignItems: "center",
        justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16,
      }}>D</div>
      <span style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e" }}>Dabang</span>
    </div>

    {/* Nav Items */}
    <nav style={{ flex: 1 }}>
      {navItems.map(({ icon, label }) => (
        <div
          key={label}
          onClick={() => setActiveNav(label)}
          style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "11px 20px", cursor: "pointer",
            margin: "2px 12px", borderRadius: 10,
            fontSize: 14, fontWeight: activeNav === label ? 600 : 400,
            background: activeNav === label
              ? "linear-gradient(90deg,#6c63ff,#a78bfa)"
              : "transparent",
            color: activeNav === label ? "#fff" : "#555",
            transition: "all 0.15s",
          }}
        >
          <span style={{ fontSize: 16 }}>{icon}</span>
          {label}
        </div>
      ))}
    </nav>

    {/* Upgrade Card */}
    <div style={{
      margin: "16px 12px 8px",
      background: "linear-gradient(135deg,#6c63ff,#a78bfa)",
      borderRadius: 14, padding: "18px 14px",
      color: "#fff", textAlign: "center",
    }}>
      <div style={{ fontSize: 22, marginBottom: 6 }}>⚡</div>
      <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Dabang Pro</div>
      <div style={{ fontSize: 11, opacity: 0.85, marginBottom: 12 }}>Get access to all features</div>
      <button style={{
        background: "#fff", color: "#6c63ff", border: "none",
        borderRadius: 8, padding: "7px 20px",
        fontWeight: 700, fontSize: 12, cursor: "pointer", width: "100%",
      }}>Get Pro</button>
    </div>
  </div>
);

export default Sidebar;
