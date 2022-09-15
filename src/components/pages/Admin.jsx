import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CustomerTable from "./customerTable/CustomerTable";

const Admin = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://demo3522726.mockable.io/get_customers"
      );
      setData(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="serch....."
        onChange={(e) => setQuery(e.target.value)}
      />

      <CustomerTable customerData={data} />
    </div>
  );
};

export default Admin;
