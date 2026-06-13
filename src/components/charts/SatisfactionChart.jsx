import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { satisfactionData } from "../../data/chartData";
import ChartHeadingSection from "./ChartHeadingSection";

const SatisfactionChart = () => {
  const [visible, setVisible] = useState({
    last: true,
    current: true,
  });

  const toggleArea = (key) => {
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
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChartHeadingSection Heading="Customer Satisfaction" />

      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={satisfactionData}>
            <defs>
              <linearGradient id="lastGrad" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#4F8EF7"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="#4F8EF7"
                  stopOpacity={0.05}
                />
              </linearGradient>

              <linearGradient id="curGrad" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#2ECC71"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="#2ECC71"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis hide />

            <Tooltip />

            {visible.last && (
              <Area
                type="monotone"
                dataKey="last"
                stroke="#4F8EF7"
                fill="url(#lastGrad)"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "#4F8EF7",
                }}
              />
            )}

            {visible.current && (
              <Area
                type="monotone"
                dataKey="current"
                stroke="#2ECC71"
                fill="url(#curGrad)"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "#2ECC71",
                }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        <div
          onClick={() => toggleArea("last")}
          style={{
            textAlign: "center",
            cursor: "pointer",
            opacity: visible.last ? 1 : 0.4,
            transition: "0.2s",
          }}
        >
          <div
            style={{
              color: "#4F8EF7",
              fontSize: 11,
              marginBottom: 4,
            }}
          >
            ← Last Month
          </div>

          <div
            style={{
              fontWeight: 700,
            }}
          >
            $3,004
          </div>
        </div>

        <div
          onClick={() => toggleArea("current")}
          style={{
            textAlign: "center",
            cursor: "pointer",
            opacity: visible.current ? 1 : 0.4,
            transition: "0.2s",
          }}
        >
          <div
            style={{
              color: "#2ECC71",
              fontSize: 11,
              marginBottom: 4,
            }}
          >
            → This Month
          </div>

          <div
            style={{
              fontWeight: 700,
            }}
          >
            $4,504
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionChart;