import { useState } from "react";
import API from "../services/api";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Or use `/logo.png` if in public

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/admin/login", { password });
      setToken(res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
        <img src={logo} alt="Bakery Logo" style={styles.logo} />
      <h2 style={styles.heading}>🧁 Admin Login</h2>
      <form onSubmit={login} style={styles.form}>
        <input
          type="password"
          placeholder="Enter admin password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "120px auto",
    padding: "30px",
    background: "linear-gradient(135deg, #f3f9ff, #fdf6e3)",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "25px",
    color: "#5D4037",
  },
   logo: {
    height: "100px",
    width: "100px",
    borderRadius: "25%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    transition: "0.2s ease",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#8D6E63",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};
