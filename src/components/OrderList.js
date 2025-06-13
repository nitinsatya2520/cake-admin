import { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavbar from "./AdminNavbar";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/admin/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div><AdminNavbar />
    <div style={styles.container}>
         
      <h2 style={styles.heading}>🧾 All Orders</h2>
      {orders.length === 0 ? (
        <p style={styles.empty}>No orders found.</p>
      ) : (
        <ul style={styles.list}>
          {orders.map((o, i) => (
            <li key={i} style={styles.card}>
              <div style={styles.header}>
                <b>{o.name}</b> ({o.phone})
              </div>
              <div style={styles.details}>
                <p><strong>Total:</strong> ₹{o.total}</p>
                <p><strong>Address:</strong> {o.address}</p>
                <p><strong>Transaction ID:</strong> {o.transactionid}</p>
                <p><strong>Time:</strong> {new Date(o.timestamp).toLocaleString()}</p>
                
                <pre style={styles.pre}>{JSON.stringify(o.cartItems, null, 2)}</pre>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    background: "#fffaf2",
    borderRadius: "12px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    color: "#6D4C41",
  },
  empty: {
    textAlign: "center",
    color: "#888",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "20px",
  },
  header: {
    fontSize: "18px",
    color: "#3e2723",
    marginBottom: "10px",
  },
  details: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#5d4037",
  },
  pre: {
    background: "#f3e5f5",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "13px",
    overflowX: "auto",
  },
};
