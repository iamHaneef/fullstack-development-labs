import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";

import DataTable from "./modules/data-display/DataTable";
import BarChart from "./modules/data-display/BarChart";
import PieChart from "./modules/data-display/PieChart";
import DonutChart from "./modules/data-display/DonutChart";
import GaugeChart from "./modules/data-display/GaugeChart";
import LineChart from "./modules/data-display/LineChart";
import StackedColumnLine from "./modules/data-display/StackedColumnLine";
import SankeyChart from "./modules/data-display/SankeyChart";
import GroupedBarChart from "./modules/data-display/GroupedBarPlot";
import RoseChart from "./modules/data-display/RoseChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DonutChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
