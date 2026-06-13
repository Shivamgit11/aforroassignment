import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { revenueData } from "../../data/chartData";

const RevenueChart = () => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
    <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 16 }}>Total Revenue</div>
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={revenueData} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
        <XAxis dataKey="day" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}k`} />
        <Tooltip formatter={v => `$${v.toLocaleString()}`} />
        <Bar dataKey="online" fill="#4F8EF7" radius={[4, 4, 0, 0]} />
        <Bar dataKey="offline" fill="#2ECC71" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", gap: 16, fontSize: 12, justifyContent: "center", marginTop: 8 }}>
      <span>🔵 Online Sales</span>
      <span>🟢 Offline Sales</span>
    </div>
  </div>
);

export default RevenueChart;
