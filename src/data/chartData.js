import { SVG } from "../utils/Svgs/Svg";
export const revenueData = [
  { day: "Mon", online: 12000, offline: 8000 },
  { day: "Tue", online: 18000, offline: 6000 },
  { day: "Wed", online: 9000, offline: 14000 },
  { day: "Thu", online: 22000, offline: 5000 },
  { day: "Fri", online: 15000, offline: 10000 },
  { day: "Sat", online: 20000, offline: 7000 },
  { day: "Sun", online: 11000, offline: 9000 },
];

export const visitorData = [
  { month: "Jan", loyal: 280, new: 220, unique: 180 },
  { month: "Feb", loyal: 300, new: 250, unique: 200 },
  { month: "Mar", loyal: 290, new: 260, unique: 210 },
  { month: "Apr", loyal: 320, new: 240, unique: 230 },
  { month: "May", loyal: 310, new: 280, unique: 220 },
  { month: "Jun", loyal: 340, new: 300, unique: 250 },
  { month: "Jul", loyal: 360, new: 320, unique: 270 },
  { month: "Aug", loyal: 350, new: 290, unique: 260 },
  { month: "Sep", loyal: 370, new: 310, unique: 280 },
  { month: "Oct", loyal: 345, new: 295, unique: 265 },
  { month: "Nov", loyal: 330, new: 275, unique: 245 },
  { month: "Dec", loyal: 315, new: 260, unique: 235 },
];

export const satisfactionData = [
  { month: "Jan", last: 3200, current: 4100 },
  { month: "Feb", last: 3500, current: 3900 },
  { month: "Mar", last: 3100, current: 4300 },
  { month: "Apr", last: 3800, current: 4000 },
  { month: "May", last: 3600, current: 4500 },
  { month: "Jun", last: 3004, current: 4504 },
];

export const targetData = [
  { month: "Jan", reality: 7000, target: 9000 },
  { month: "Feb", reality: 8200, target: 10000 },
  { month: "Mar", reality: 7800, target: 9500 },
  { month: "Apr", reality: 8500, target: 11000 },
  { month: "May", reality: 9000, target: 10500 },
  { month: "Jun", reality: 8823, target: 12122 },
  { month: "Jul", reality: 9200, target: 11800 },
];

export const volumeData = [
  { name: "A", volume: 900, service: 500 },
  { name: "B", volume: 1100, service: 700 },
  { name: "C", volume: 800, service: 600 },
  { name: "D", volume: 1300, service: 750 },
  { name: "E", volume: 1135, service: 635 },
];

export const topProducts = [
  { rank: "01", name: "Home Decor Range", popularity: 45, color: "#4F8EF7" },
  { rank: "02", name: "Disney Princess Pink Bag 18'", popularity: 29, color: "#2ECC71" },
  { rank: "03", name: "Bathroom Essentials", popularity: 18, color: "#9B59B6" },
  { rank: "04", name: "Apple Smartwatches", popularity: 25, color: "#F39C12" },
];

export const navItems = [
  { icon:  SVG.dashboardIconSvg, inactiveIcon: SVG.dashboardIconInactive, label: "Dashboard" , link: "/dashboard"},
  { icon: SVG.leaderboardIcon, inactiveIcon: SVG.leaderboardIconInactive, label: "Leaderboard" , link: "/leaderboard" },
  { icon: SVG.cartIcon,inactiveIcon:SVG.cartIconInactiveIcon,  label: "Order" , link: "/order"},
  { icon: SVG.productSvgIcon, inactiveIcon: SVG.productSvgIconInactive, label: "Products", linke: "/products" },
  { icon: SVG.salesReportSvgIcon, inactiveIcon: SVG.salesReportSvgIconInactive, label: "Sales Report", link: "salesreport" },
  { icon: SVG.svgMessageIcon, inactiveIcon: SVG.svgMessageIconInactive  , label: "Messages", link: "/message" },
  { icon: SVG.settingIconSvg, inactiveIcon: SVG.settingIconSvgInactive, label: "Settings", link: "/settings" },
  { icon: SVG.signoutIconSvg,  inactiveIcon: SVG.signoutIconSvgInactive, label: "Sign Out", link: "/credentials" },
];
