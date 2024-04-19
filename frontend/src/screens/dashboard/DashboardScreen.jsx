import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

function Dashboard() {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
}

export default Dashboard;
