import { topProducts } from "../../data/chartData";

const TopProducts = () => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", flex: 1.4 }}>
    <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 16 }}>Top Products</div>
    <div style={{ display: "grid", gridTemplateColumns: "32px 1fr 140px 60px", gap: "14px 8px", fontSize: 12 }}>
      <span style={{ color: "#999" }}>#</span>
      <span style={{ color: "#999" }}>Name</span>
      <span style={{ color: "#999" }}>Popularity</span>
      <span style={{ color: "#999", textAlign: "right" }}>Sales</span>

      {topProducts.map(p => (
        <>
          <span key={`r-${p.rank}`} style={{ color: "#999", fontSize: 11 }}>{p.rank}</span>

          <span key={`n-${p.rank}`} style={{ fontWeight: 500, color: "#1a1a2e" }}>{p.name}</span>

          <div key={`b-${p.rank}`} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ background: "#f0f0f0", borderRadius: 4, height: 8, flex: 1, overflow: "hidden" }}>
              <div style={{ width: `${p.popularity}%`, background: p.color, height: "100%", borderRadius: 4 }} />
            </div>
          </div>

          <span
            key={`s-${p.rank}`}
            style={{
              textAlign: "right", background: "#f4f6fb",
              borderRadius: 6, padding: "2px 8px",
              fontWeight: 600, color: p.color, fontSize: 11,
            }}
          >
            {p.popularity}%
          </span>
        </>
      ))}
    </div>
  </div>
);

export default TopProducts;
