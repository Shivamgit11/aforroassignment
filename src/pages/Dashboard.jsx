import StatCard from "../components/cards/StatCard";
import VisitorChart from "../components/charts/VisitorChart";
import RevenueChart from "../components/charts/RevenueChart";
import SatisfactionChart from "../components/charts/SatisfactionChart";
import TargetChart from "../components/charts/TargetChart";
import SalesMap from "../components/charts/SalesMap";
import VolumeChart from "../components/charts/VolumeChart";
import TopProducts from "../components/TopProducts";

const statCards = [
  { icon: "🛍️", value: "$1k", label: "Total Sales",    change: "+8% from yesterday",  bg: "#fff0f3" },
  { icon: "📋", value: "300", label: "Total Order",    change: "+5% from yesterday",  bg: "#fff8f0" },
  { icon: "✅", value: "5",   label: "Product Sold",   change: "+1.2% from yesterday", bg: "#f0fff4" },
  { icon: "👤", value: "8",   label: "New Customers",  change: "0.5% from yesterday", bg: "#f5f0ff" },
];

const Dashboard = () => (
  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>

    {/* Row 1: Sales Summary + Visitor Insights */}
    <div style={{ display: "flex", gap: 20 }}>
      {/* Sales Summary */}
      <div style={{
        flex: 1.6, background: "#fff", borderRadius: 16, padding: 24,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)", border: "2px solid #e8e4ff",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e" }}>Today's Sales</div>
            <div style={{ fontSize: 12, color: "#999" }}>Sales Summary</div>
          </div>
          <button style={{
            background: "#f4f6fb", border: "none", borderRadius: 8,
            padding: "7px 14px", fontSize: 12, cursor: "pointer", color: "#555",
          }}>↑ Export</button>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {statCards.map(c => <StatCard key={c.label} {...c} />)}
        </div>
      </div>

      <VisitorChart />
    </div>

    {/* Row 2: Revenue + Satisfaction + Target */}
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ flex: 1.4 }}><RevenueChart /></div>
      <SatisfactionChart />
      <TargetChart />
    </div>

    {/* Row 3: Top Products + Map + Volume */}
    <div style={{ display: "flex", gap: 20 }}>
      <TopProducts />
      <SalesMap />
      <VolumeChart />
    </div>

  </div>
);

export default Dashboard;
