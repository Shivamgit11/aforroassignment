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
          color: "#1A1A2E",
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
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#E5E7EB"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#6B7280",
              }}
            />

            <YAxis
              width={45}
              tickMargin={10}
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
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        <div
          onClick={() => toggleLine("loyal")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            opacity: visible.loyal ? 1 : 0.4,
          }}
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
          onClick={() => toggleLine("new")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            opacity: visible.new ? 1 : 0.4,
          }}
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
          onClick={() => toggleLine("unique")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            opacity: visible.unique ? 1 : 0.4,
          }}
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