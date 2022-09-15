import React from "react";
import Header from "../header/Header";
import "./Shipment.css";
import { BsArrowLeft } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import img from "../../assests/Frame 460.png";
import ShippingTab from "../shippingTab/ShippingTab";

const Shipments = () => {
  return (
    <>
      <Header title="Shipments" />
      <div className="shipments-details">
        <div className="more-Info">
          <div className="icon">
            <div className="left-icon">
              <BsArrowLeft fontSize={22} />
            </div>
            <h3>Shipment Details</h3>
          </div>
          <div className="invoice-btn">
            <button className="btn-invoice">Invoice</button>
            <button className="btn-track">Track/Update Shipment</button>
          </div>
        </div>
        <div className="export-details">
          <div className="icon-arr">
            <div className="icon-wrapper">
              <FiArrowUpRight className="icon" />
            </div>
            <h3>Export</h3>
          </div>
          <div className="date">
            <h5>Apr 02, 2022</h5>
          </div>
          <div className="shipping-id">
            <p>Shipment ID</p>
            <h5>489395758</h5>
          </div>
        </div>
        <div className="export-Info">
          <div className="discharge">
            <p>Port of Discharge</p>
            <h2>NGAPP</h2>
            <h6>Lagos, Nigeria</h6>
          </div>
          <div className="img-direction">
            <img src={img} alt="" />
          </div>
          <div className="delivery">
            <p>Delievery location</p>
            <h2>Arlington</h2>
            <h6>VA, USA</h6>
          </div>
        </div>
      </div>
      <ShippingTab />
    </>
  );
};

export default Shipments;
