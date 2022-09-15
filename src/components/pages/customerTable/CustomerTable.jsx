import React from "react";
import "./CustomerTable.css";
import { useNavigate } from "react-router-dom";

const CustomerTable = ({ customerData }) => {
  const navigate = useNavigate();
  const handleShipment = () => {
    navigate("shipmentcustomer");
  };
  return (
    <div className="customerTable">
      <table className="customer-tbl">
        <tbody>
          {customerData.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.Avatar} alt="" />
              </td>
              <td>{item.first_name} </td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.ip_address}</td>
              <td>
                <button className="btn-ship" onClick={handleShipment}>
                  Shipments
                </button>
              </td>
              <td>
                <button className="btn-edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
