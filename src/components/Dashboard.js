import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Or use `/logo.png` if in public

export default function Dashboard() {
  return (
    <div style={styles.wrapper}>
      <nav style={styles.nav}>
        <div style={styles.navLeft}>
          <img src={logo} alt="Bakery Logo" style={styles.logo} />
          <span style={styles.brand}>Admin</span>
        </div>
        <div>
          <Link to="/products" style={styles.navLink}>Products</Link>
          <Link to="/orders" style={styles.navLink}>Orders</Link>
        </div>
      </nav>

      <div style={styles.content}>
        <h2 style={styles.heading}>Welcome to Your Bakery Dashboard 🍰</h2>
        <p style={styles.subtext}>Manage your products and track customer orders with ease.</p>
        <div style={styles.actions}>
          <Link to="/products" style={styles.button}>🧁 Manage Products</Link>
          <Link to="/orders" style={styles.button}>📦 View Orders</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(to right, #fdf0e5, #ffe3e0)",
    minHeight: "100vh",
    color: "#4e342e",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#ffb74d",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    height: "60px",
    width: "60px",
    borderRadius: "25%",
  },
  brand: {
    fontSize: "22px",
    fontWeight: "600",
  },
  navLink: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#4e342e",
    fontWeight: "bold",
    fontSize: "16px",
  },
  content: {
    textAlign: "center",
    padding: "60px 20px",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "18px",
    marginBottom: "40px",
    color: "#6d4c41",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#d2691e",
    color: "white",
    padding: "15px 30px",
    fontSize: "16px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
};
