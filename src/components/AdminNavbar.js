import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>🍰 Admin Panel</div>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/orders" style={styles.link}>Orders</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#6D4C41", // Chocolate brown
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  brand: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "opacity 0.2s",
  },
};
