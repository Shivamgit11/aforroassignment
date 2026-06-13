import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueData } from "../../data/chartData";
import ChartHeadingSection from "./ChartHeadingSection";

const RevenueChart = () => {
  const [visible, setVisible] = useState({
    online: true,
    offline: true,
  });

  const toggleBar = (key) => {
    setVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChartHeadingSection Heading="Total Revenue" />

      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={revenueData}
            barGap={4}
            barSize={8}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v / 1000}k`}
            />

            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
            />

            {visible.online && (
              <Bar
                dataKey="online"
                fill="#4F8EF7"
                radius={[4, 4, 0, 0]}
              />
            )}

            {visible.offline && (
              <Bar
                dataKey="offline"
                fill="#2ECC71"
                radius={[4, 4, 0, 0]}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          marginTop: 12,
          fontSize: 12,
          flexWrap: "wrap",
        }}
      >
        <div
          onClick={() => toggleBar("online")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            opacity: visible.online ? 1 : 0.4,
            userSelect: "none",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#4F8EF7",
            }}
          />
          Online Sales
        </div>

        <div
          onClick={() => toggleBar("offline")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            opacity: visible.offline ? 1 : 0.4,
            userSelect: "none",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#2ECC71",
            }}
          />
          Offline Sales
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;