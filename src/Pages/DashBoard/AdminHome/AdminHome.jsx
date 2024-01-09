import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDropbox, FaUsers, FaWallet } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const result = await axiosSecure.get("/admin-stats");
      setLoading(false);
      return result.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const result = await axiosSecure.get("/order-stats");
      setLoading(false);
      return result.data;
    },
  });
  console.log(chartData);

  {
    !loading && console.log(stats);
  }

  //barchart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  //pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const pieChartData = chartData.map(data => {
    return {name: data.category, value: data.revenue}
})


  return (
    <div className="lg:p-10 bg-gray-100 h-screen px-2 mt-12  lg:px-[50px] max-w-[100vw] overflow-y-auto overflow-x-hidden">
      <h1 className="text-3xl font-bold">
        Hi! Welcome Back <span>{user?.displayName}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="rounded-lg bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-center px-8 py-4 gap-2 border-r-[#FCDBFF]">
          <FaWallet className="text-4xl text-white" />
          <div className="flex flex-col">
            <h1 className="text-2xl text-white font-bold">${stats?.revenue}</h1>
            <h1 className="text-white font-bold">Revenue</h1>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex items-center justify-center px-8 py-4 gap-2 border-r-[#FDE8C0]">
          <FaUsers className="text-4xl text-white" />
          <div className="flex flex-col">
            <h1 className="text-2xl text-white font-bold">
              {stats?.customers}
            </h1>
            <h1 className="text-white font-bold">Customers</h1>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex items-center justify-center px-8 py-4 gap-2 border-r-[#FECDE9]">
          <FaDropbox className="text-4xl text-white" />
          <div className="flex flex-col">
            <h1 className="text-2xl text-white font-bold">{stats?.products}</h1>
            <h1 className="text-white font-bold">Products</h1>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] flex items-center justify-center px-8 py-4 gap-2 border-r-[#B6F7FF]">
          <TbTruckDelivery className="text-4xl text-white" />
          <div className="flex flex-col">
            <h1 className="text-2xl text-white font-bold">{stats?.orders}</h1>
            <h1 className="text-white font-bold">Orders</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 mt-12 rounded-lg bg-white overflow-x-auto">
        <div className="BarChart lg:w-1/2 mx-auto">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="PieChart lg:w-1/2 h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        <Legend></Legend>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
        </PieChart>

      </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

AdminHome.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  fill: PropTypes.number,
};

export default AdminHome;
