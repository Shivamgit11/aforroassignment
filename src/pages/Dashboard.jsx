import VisitorChart from "../components/charts/VisitorChart";
import RevenueChart from "../components/charts/RevenueChart";
import SatisfactionChart from "../components/charts/SatisfactionChart";
import TargetChart from "../components/charts/TargetChart";
import SalesMap from "../components/charts/SalesMap";
import VolumeChart from "../components/charts/VolumeChart";
import TopProducts from "../components/charts/TopProducts";
import DataTable from   "../components/charts/Table";

const Dashboard = () => (
  <div className="grid grid-cols-10">

    {/* Row 1: Sales Summary + Visitor Insights */}
   
      {/* Sales Summary */}
      <div className="col-span-6"><SalesMap /></div>
      <div className="col-span-4"><VisitorChart /></div>
     

      


    {/* Row 2: Revenue + Satisfaction + Target */}
   
      <div className="col-span-4"><RevenueChart />  </div>
      <div className="col-span-3"><SatisfactionChart /> </div>
     <div className="col-span-3"> <TargetChart /></div>
<div className="col-span-4"> <TopProducts /> </div>
<div className="col-span-3">  </div>
<div className="col-span-3"><VolumeChart /></div>
<div className="col-span-10"><DataTable /></div>
   
  </div>
);

export default Dashboard;
