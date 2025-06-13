import { useState } from "react";
import API from "../services/api";

export default function EditProductModal({ product, close, refresh }) {
  const [form, setForm] = useState(product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/admin/edit-product/${product.id}`, form);
    close();
    refresh();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={styles.heading}>Edit "{product.name}"</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
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

          <div style={styles.actions}>
            <button type="submit" style={styles.updateBtn}>Update</button>
            <button type="button" onClick={close} style={styles.cancelBtn}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fffaf2",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#6D4C41",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    backgroundColor: "#fff",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  updateBtn: {
    backgroundColor: "#81C784",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  cancelBtn: {
    backgroundColor: "#EF9A9A",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
