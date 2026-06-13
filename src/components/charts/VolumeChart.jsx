import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { volumeData } from "../../data/chartData";

const VolumeChart = () => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", flex: 1 }}>
    <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 16 }}>Volume vs Service Level</div>
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={volumeData} barGap={4}>
        <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="volume" fill="#4F8EF7" radius={[4, 4, 0, 0]} />
        <Bar dataKey="service" fill="#2ECC71" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", gap: 24, fontSize: 13, justifyContent: "center", marginTop: 12 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#4F8EF7", fontSize: 10 }}>● Volume</div>
        <div style={{ fontWeight: 700 }}>1,135</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#2ECC71", fontSize: 10 }}>● Services</div>
        <div style={{ fontWeight: 700 }}>635</div>
      </div>
    </div>
  </div>
);

export default VolumeChart;
