import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { targetData } from "../../data/chartData";
import ChartHeadingSection from "./ChartHeadingSection";
const TargetChart = () => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", flex: 1 }}>
    <ChartHeadingSection Heading="Target vs Reality" />
    <ResponsiveContainer width="100%" height={192}>
      <BarChart data={targetData} barGap={3} barSize={10}>
        <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="reality" fill="#F4B942" radius={[4, 4, 0, 0]} />
        <Bar dataKey="target" fill="#2ECC71" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Reality Sales</div>
          <div style={{ fontSize: 10, color: "#999" }}>Global</div>
        </div>
        <div style={{ fontWeight: 700, color: "#1a1a2e" }}>8,823</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Target Sales</div>
          <div style={{ fontSize: 10, color: "#999" }}>Commercial</div>
        </div>
        <div style={{ fontWeight: 700, color: "#F4B942" }}>12,122</div>
      </div>
    </div>
  </div>
);

export default TargetChart;
