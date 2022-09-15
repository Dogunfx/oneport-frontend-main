import React from "react";

import "./ShipmentInfo.css";
import { FiArrowUpRight } from "react-icons/fi";
// import { FiArrowDownLeft } from 'react-icons/fi'
import img from "../../assests/Frame 460.png";
import { useNavigate } from "react-router-dom";

const ShipmentInfo = ({ shippingData }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/shipment");
  };

  return (
    <div className="shippingInfos">
      <div className="tblTitle">
        <h6>Shipment Type</h6>
        <h6>origin</h6>
        <h6>destination</h6>
        <h6>Shipment Date</h6>
        <h6>Shiping id</h6>
      </div>
      <table className="shipping-tbl">
        <tbody>
          {shippingData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="arrup-icon">
                  <FiArrowUpRight className="icon" />
                </div>
              </td>
              <td>{item.shipping_type}</td>
              <td>
                {item.origin_port_code}
                <p>
                  {item.state}, {item.origin_port_country}
                </p>
              </td>
              <td>
                <img src={img} alt="" width={80} />
              </td>
              <td>
                {item.destination_port_code}
                <p>
                  {item.destination_port_city}, {item.destination_port_country}
                </p>
              </td>
              <td>{item.shipment_pickup_date}</td>
              <td>{item._id}</td>
              <td>
                <button className="btn-view" onClick={handleDetails}>
                  view Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentInfo;
