import { useEffect, useState } from "react";
import API from "../services/api";
import AddProductForm from "./AddProductForm";
import EditProductModal from "./EditProductModal";
import AdminNavbar from "./AdminNavbar";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await API.delete(`/admin/delete-product/${id}`);
    fetchProducts();
  };

  return (
    <div>  
        <AdminNavbar />
          <div style={styles.container}>
         
      <h2 style={styles.heading}>🎂 Product Manager</h2>
      <AddProductForm refresh={fetchProducts} />
      <ul style={styles.grid}>
        {products.map((p) => (
          <li key={p.id} style={styles.card}>
            <img
              src={p.image_url}
              alt={p.name}
              style={styles.image}
            />
            <div style={styles.info}>
              <h3 style={styles.name}>{p.name}</h3>
              <p style={styles.category}><strong>{p.category}</strong></p>
              <p style={styles.category}>{p.description}</p>
              <p style={styles.price}>${p.price}</p>
              <div style={styles.actions}>
                <button onClick={() => setEditingProduct(p)} style={styles.editBtn}>Edit</button>
                <button onClick={() => deleteProduct(p.id)} style={styles.deleteBtn}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          close={() => setEditingProduct(null)}
          refresh={fetchProducts}
        />
      )}
    </div>
    </div>

  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    color: "#5D4037",
    marginBottom: "30px",
  },
  grid: {
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "linear-gradient(to bottom right, #fffaf2, #f3f9ff)",
    border: "1px solid #eee",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 16px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  info: {
    padding: "15px",
    textAlign: "center",
  },
  name: {
    fontSize: "20px",
    color: "#3E2723",
    margin: "10px 0 5px",
  },
  category: {
    fontSize: "14px",
    color: "#8D6E63",
    marginBottom: "6px",
  },
  price: {
    fontWeight: "bold",
    color: "#6D4C41",
    fontSize: "16px",
    marginBottom: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  editBtn: {
    background: "#4FC3F7",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#FF8A65",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
