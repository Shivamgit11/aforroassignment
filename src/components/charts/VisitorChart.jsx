import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { visitorData } from "../../data/chartData";

const VisitorChart = () => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", flex: 1 }}>
    <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 16 }}>Visitor Insights</div>
    <ResponsiveContainer width="100%" height={160}>
      <LineChart data={visitorData}>
        <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="loyal" stroke="#a78bfa" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="new" stroke="#ef4444" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="unique" stroke="#22c55e" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", gap: 16, fontSize: 11, justifyContent: "center", marginTop: 8 }}>
      <span>🟣 Loyal Customers</span>
      <span>🔴 New Customers</span>
      <span>🟢 Unique Customers</span>
    </div>
  </div>
);

export default VisitorChart;
