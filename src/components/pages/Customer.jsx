import React from "react";

import "./Customer.css";
import Header from "../header/Header";
import CustomerTable from "./customerTable/CustomerTable";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Customer = () => {
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
    <div className="customer">
      <div className="heading">
        <Header title="Customer" />
      </div>
      <div className="mainContent">
        <div className="btn-add">
          <button>Add customer +</button>
        </div>
        <div className="tbhead">
          <h6>first name</h6>
          <h6>last name</h6>
          <h6>email address</h6>
          <h6>phone number</h6>
          <h6>last login</h6>
        </div>
        <CustomerTable customerData={data} />
      </div>
    </div>
  );
};

export default Customer;
