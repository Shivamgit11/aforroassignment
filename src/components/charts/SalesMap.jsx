import React from "react";
import ChartHeadingSection from "./ChartHeadingSection";
import { SVG } from "../../utils/Svgs/Svg";

const sales = [
  {
    value: "$1k",
    label: "Total Sales",
    growth: "+8%",
    bgColor: "#FFE2E5",
    iconBackgroundColor: "#FA5A7D",
    icon: SVG.salesIconSvg,
  },
  {
    value: "300",
    label: "Total Order",
    growth: "+5%",
    bgColor: "#FFF4DE",
    iconBackgroundColor: "#FF947A",
    icon: SVG.totalOrderIconSvg,
  },
  {
    value: "5",
    label: "Sold",
    growth: "+1.2%",
    bgColor: "#DCFCE7",
    iconBackgroundColor: "#3CD856",
    icon: SVG.soldIconSvg,
  },
  {
    value: "8",
    label: "Customers",
    growth: "+0.5%",
    bgColor: "#F3E8FF",
    iconBackgroundColor: "#BF83FF",
    icon: SVG.customerIconSvg,
  },
];

const SalesMap = () => {
  return (
    <div className="bg-white p-8 rounded-2xl">
      <ChartHeadingSection
        Heading="Today's Sales"
        Subheading="Sales Summary"
        SecondSection={<div
  className="inline-flex h-10 items-center justify-center gap-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
>
  <div className="flex items-center justify-center">
    {SVG.uploadIconSvg}
  </div>

  <span className="flex items-center justify-center">
    Export
  </span>
</div>}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {sales.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl p-[20px] h-fit"
            style={{ backgroundColor: item.bgColor }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[20px] mb-4"
              style={{ backgroundColor: item.iconBackgroundColor }}
            >
              {item.icon}
            </div>

            <h2 className="chart-sales-m-head">
              {item.value}
            </h2>

            <p className="charts-sales-b-head">
              {item.label}
            </p>

            <p className="charts-sales-b-des">
              Last day {item.growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesMap;