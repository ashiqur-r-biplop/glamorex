"use client";
import { useGetHomeCountsQuery } from "@/redux-toolkit/slice/adminApis/adminGetApies";
import React from "react";
import { FaDollarSign, FaSearch } from "react-icons/fa";
import {
  FaArrowDown,
  FaPeopleCarryBox,
  FaArrowUp,
  FaPeopleArrows,
  FaPeopleGroup,
  FaProductHunt,
  FaWallet,
} from "react-icons/fa6";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

const AdminHomePage = () => {
  const { data: counts } = useGetHomeCountsQuery();
  const sellerStats = [
    {
      name: "Customers",
      icon: <FaPeopleGroup></FaPeopleGroup>,
      total: counts?.customers || 1,
      lastWeek: 1,
      get growthPercentage() {
        return (((this.total - this.lastWeek) / this.lastWeek) * 100).toFixed(
          2
        );
      },
    },
    {
      name: "Seller",
      icon: <FaPeopleCarryBox />,
      total: counts?.sellers || 1,
      lastWeek: 1,
      get growthPercentage() {
        return (
          ((parseFloat(this.total) - parseFloat(this.lastWeek)) /
            parseFloat(this.lastWeek)) *
          100
        ).toFixed(2);
      },
    },
    {
      name: "Products",
      icon: <FaProductHunt></FaProductHunt>,
      total: counts?.products || 1,
      lastWeek: 1,
      get growthPercentage() {
        return (((this.total - this.lastWeek) / this.lastWeek) * 100).toFixed(
          2
        );
      },
    },
    {
      name: "Revenue",
      icon: <FaDollarSign></FaDollarSign>,
      total: 2000,
      lastWeek: 1,
      get growthPercentage() {
        return (((this.total - this.lastWeek) / this.lastWeek) * 100).toFixed(
          2
        );
      },
    },
  ];

  // right chart data
  const chartData = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  // left pie chart data
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-8 bg-slate-200 h-full">
      {/* stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {sellerStats.map((statsData, ind) => {
          const { name, icon, total, lastWeek, totalGrowth, growthPercentage } =
            statsData || {};

          return (
            <div
              div
              className={`p-5 space-y-4 rounded-t bg-slate-50 shadow border-b-4  ${
                growthPercentage > 0 ? "border-green-500" : "border-red-500"
              }`}
              key={ind}
            >
              <div className="flex justify-between items-center gap-2">
                <div
                  className={`border-l-2 ${
                    growthPercentage > 0 ? "border-green-500" : "border-red-500"
                  } pl-3 space-y-3`}
                >
                  <h2 className="my-subtitle text-slate-400">{name}</h2>
                  <p className="my-subtitle">
                    {" "}
                    {name === "Profit" || name === "Revenue" ? "$" : ""} {total}
                  </p>
                </div>
                <span className="text-3xl p-3 bg-slate-500 bg-opacity-30 rounded text-orange-500">
                  {icon}
                </span>
              </div>

              <p className="text-slate-400 flex items-center gap-2">
                <span
                  className={`${
                    growthPercentage > 0 ? "text-green-500" : "text-red-500"
                  } flex gap-1 items-center`}
                >
                  {" "}
                  {growthPercentage}%{" "}
                  {growthPercentage > 0 ? (
                    <FaArrowUp></FaArrowUp>
                  ) : (
                    <FaArrowDown></FaArrowDown>
                  )}
                </span>{" "}
                since last week
              </p>
            </div>
          );
        })}
      </div>

      {/* chart */}
      <div className="grid grid-cols-12 gap-6">
        {/* Pie chart needle */}
        <div className="my-16 col-span-12 lg:col-span-5 h-[500px] bg-slate-50 shadow rounded">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Seller analytics chart */}
        <div className="my-16 h-[500px] col-span-12 lg:col-span-7 bg-slate-50 shadow rounded">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
