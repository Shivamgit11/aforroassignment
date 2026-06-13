import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { visitorData } from "../../data/chartData";

const VisitorChart = () => {
  const [visible, setVisible] = useState({
    loyal: true,
    new: true,
    unique: true,
  });

  const toggleLine = (key) => {
    setVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const legendItemStyle = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    opacity: active ? 1 : 0.4,
    transition: "0.2s",
  });

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
      <div
        style={{
          fontWeight: 700,
          fontSize: 16,
          marginBottom: 20,
        }}
      >
        Visitor Insights
      </div>

      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={visitorData}
            margin={{
              top: 10,
              right: 10,
              left: -25,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              width={20}
              domain={[0, 300]}
              ticks={[0, 100, 200, 300]}
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#6B7280",
              }}
            />

            <Tooltip />

            {visible.loyal && (
              <Line
                type="monotone"
                dataKey="loyal"
                stroke="#A855F7"
                strokeWidth={5}
                dot={false}
              />
            )}

            {visible.new && (
              <Line
                type="monotone"
                dataKey="new"
                stroke="#EF4444"
                strokeWidth={5}
                dot={false}
              />
            )}

            {visible.unique && (
              <Line
                type="monotone"
                dataKey="unique"
                stroke="#22C55E"
                strokeWidth={5}
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          marginTop: 16,
          fontSize: 12,
          flexWrap: "wrap",
        }}
      >
        <div
          style={legendItemStyle(visible.loyal)}
          onClick={() => toggleLine("loyal")}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#A855F7",
            }}
          />
          Loyal Customers
        </div>

        <div
          style={legendItemStyle(visible.new)}
          onClick={() => toggleLine("new")}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#EF4444",
            }}
          />
          New Customers
        </div>

        <div
          style={legendItemStyle(visible.unique)}
          onClick={() => toggleLine("unique")}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22C55E",
            }}
          />
          Unique Customers
        </div>
      </div>
    </div>
  );
};

export default VisitorChart;