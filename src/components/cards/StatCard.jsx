const StatCard = ({ icon, value, label, change, bg }) => (
  <div style={{
    background: bg,
    borderRadius: 12,
    padding: "16px 20px",
    flex: 1,
    minWidth: 0,
  }}>
    <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
    <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>{value}</div>
    <div style={{ fontSize: 13, color: "#555", marginBottom: 4 }}>{label}</div>
    <div style={{ fontSize: 11, color: "#27ae60" }}>{change}</div>
  </div>
);

export default StatCard;
