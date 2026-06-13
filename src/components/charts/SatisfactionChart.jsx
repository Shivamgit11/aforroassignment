import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { satisfactionData } from "../../data/chartData";

const SatisfactionChart = () => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", flex: 1 }}>
    <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 16 }}>Customer Satisfaction</div>
    <ResponsiveContainer width="100%" height={160}>
      <AreaChart data={satisfactionData}>
        <defs>
          <linearGradient id="lastGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4F8EF7" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#4F8EF7" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="curGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#2ECC71" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip />
        <Area type="monotone" dataKey="last" stroke="#4F8EF7" fill="url(#lastGrad)" strokeWidth={2} dot={{ r: 4, fill: "#4F8EF7" }} />
        <Area type="monotone" dataKey="current" stroke="#2ECC71" fill="url(#curGrad)" strokeWidth={2} dot={{ r: 4, fill: "#2ECC71" }} />
      </AreaChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", gap: 24, fontSize: 13, justifyContent: "center", marginTop: 12 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#999", fontSize: 11 }}>← Last Month</div>
        <div style={{ fontWeight: 700 }}>$3,004</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#999", fontSize: 11 }}>→ This Month</div>
        <div style={{ fontWeight: 700 }}>$4,504</div>
      </div>
    </div>
  </div>
);

export default SatisfactionChart;
