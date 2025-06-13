import { useState } from "react";
import API from "../services/api";

export default function AddProductForm({ refresh }) {
  const [form, setForm] = useState({
    name: "", image_url: "", description: "",
    price: "", stock: "", category: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/admin/add-product", form);
    refresh();
    setForm({ name: "", image_url: "", description: "", price: "", stock: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.heading}>Add New Product</h3>
      <input
        placeholder="Product Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={styles.input}
      />
      <input
        placeholder="Image URL"
        value={form.image_url}
        onChange={(e) => setForm({ ...form, image_url: e.target.value })}
        style={styles.input}
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        style={styles.input}
      />
      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        style={styles.input}
      />
      <input
        placeholder="Stock"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
        style={styles.input}
      />
      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Product</button>
    </form>
  );
}

const styles = {
  form: {
    background: "#fffaf2",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "40px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif",
    maxWidth: "600px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#6D4C41",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FFB74D",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
  },
};
