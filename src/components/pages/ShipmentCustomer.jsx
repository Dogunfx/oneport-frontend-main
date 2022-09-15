import React from "react";

import "./ShipmentCustomer.css";
import Header from "../header/Header";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import img from "../../assests/profilePix2.png";
import ShipmentInfo from "../shipmentInfo/ShipmentInfo";
import { useState, useEffect } from "react";
import axios from "axios";

const ShipmentCustomer = () => {
  const [data, setData] = useState([]);
  const [temData, setTemData] = useState([]);

  function handleShipmentType(evt) {
    const newShipment = temData.filter((shipment) => {
      if (shipment.shipping_type == evt.target.value) {
        return shipment;
      }
    });

    setData(newShipment);
  }

  useEffect(() => {
    const fetchdatas = async () => {
      const res = await axios.get(
        "https://demo3522726.mockable.io/get_single_customer_shipments/123456789"
      );
      setData(res.data);
      setTemData(res.data);
    };
    fetchdatas();
  }, []);

  return (
    <div className="shipment">
      <div className="shipment-header">
        <Header title="Shipments" />
      </div>
      <div className="shipment-content">
        <BsArrowLeft fontSize={24} />
        <div className="userProfile">
          <img src={img} alt="" />
          <div className="usersDetails">
            <h6>Albert Flores</h6>
            <p>deanna.curtis@example.com</p>
            <p>07037656543</p>
          </div>
          <div className="edit-btn">
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="types-of-shipment">
        <div className="add-shipment">
          <button>Add New Shipment +</button>
        </div>
        <div className="shipment-type">
          <select name="" id="" onChange={handleShipmentType}>
            <option value="Shipment Type">Shipment Type</option>
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>
        </div>
        <div className="shipment-date">
          <select name="" id="">
            <option value="Shipment Date">Shipment Date</option>
          </select>
        </div>
        <div className="seach-input">
          <span>
            <AiOutlineSearch />
          </span>
          <input type="text" placeholder="search by shipment ID,Destination" />
        </div>
      </div>
      <ShipmentInfo shippingData={data} />
    </div>
  );
};

export default ShipmentCustomer;
