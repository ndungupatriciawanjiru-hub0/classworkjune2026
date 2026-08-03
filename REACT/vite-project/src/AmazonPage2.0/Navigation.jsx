function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#131921",
        color: "white",
        padding: "10px 20px",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>amazon</div>

      <input
        type="text"
        placeholder="Search products..."
        style={{
          flex: 1,
          margin: "0 20px",
          padding: "8px",
          borderRadius: "4px",
          border: "none",
        }}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Sign In</span>
        <span>Returns & Orders</span>
        <span>🛒 Cart</span>
      </div>
    </div>
  );
}

export default Navigation;