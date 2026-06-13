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
  <div className="grid grid-cols-10">

    {/* Row 1: Sales Summary + Visitor Insights */}
   
      {/* Sales Summary */}
      <div className="col-span-6"><SalesMap /></div>
      <div className="col-span-4"><VisitorChart /></div>
     

      


    {/* Row 2: Revenue + Satisfaction + Target */}
   
      <div className="col-span-5"><RevenueChart />  </div>
      <div className="col-span-3"><SatisfactionChart /> </div>
     <div className="col-span-2"> <TargetChart /></div>


    {/* Row 3: Top Products + Map + Volume */}
    <div style={{ display: "flex", gap: 20 }}>
      <TopProducts />
      <SalesMap />
      <VolumeChart />
    </div>

  </div>
);

export default Dashboard;
