import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./components/pages/Customer";
import ShipmentCustomer from "./components/pages/ShipmentCustomer";
import Shipments from "./components/pages/Shipment";
import Admin from "./components/pages/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="AppGlass">
          <div className="app-Sidebar">
            <Sidebar />
          </div>
          <div className="appElements">
            <Routes>
              <Route path="/" element={<h2>Dashboard</h2>} />
              <Route path="/dashboard" element={<h2>Dashboard</h2>} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/customer" element={<Customer />} />
              <Route
                path="/customer/shipmentcustomer"
                element={<ShipmentCustomer />}
              />
              <Route path="/shipment" element={<Shipments />} />
              <Route path="/tracking" element={<h2>tracking</h2>} />
              <Route path="/docs" element={<h2>Documents</h2>} />
              <Route path="/rates" element={<h2>Documents</h2>} />
              <Route path="/quotes" element={<h2>Quotes</h2>} />
              <Route path="/invoices" element={<h2>Invoices</h2>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
