import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ProductManager from "./components/ProductManager";
import OrderList from "./components/OrderList";
import { getToken } from "./utils/auth";
import "./App.css";
function PrivateRoute({ children }) {
  return getToken() ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><ProductManager /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><OrderList /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
