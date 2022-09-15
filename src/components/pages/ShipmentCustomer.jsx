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
    let newShipment;
    if (evt.target.value != "") {
      newShipment = temData.filter((shipment) => {
        if (shipment.shipping_type == evt.target.value) {
          return shipment;
        }
      });
    } else {
      newShipment = temData;
    }

    setData(newShipment);
  }

  function compareOtherProps(query, shipment) {
    if (
      String(shipment.origin_port_code)
        .toLocaleLowerCase()
        .includes(query) ||
      String(shipment.origin_port_city)
        .toLocaleLowerCase()
        .includes(query) ||
      String(shipment.origin_port_country)
        .toLocaleLowerCase()
        .includes(query) ||
      String(shipment.destination_port_code)
        .toLocaleLowerCase()
        .includes(query) ||
      String(shipment.destination_port_city)
        .toLocaleLowerCase()
        .includes(query) ||
      String(shipment.destination_port_country)
        .toLocaleLowerCase()
        .includes(query) ||
      String(shipment._id)
        .toLocaleLowerCase()
        .includes(query)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleOtherSearch(evt) {
    const searchWord = String(evt.target.value).toLocaleLowerCase();

    const newShipment = temData.filter((shipment) => {
      if (compareOtherProps(searchWord, shipment)) {
        return shipment;
      }
    });

    setData(newShipment);
  }

  function handleDateChange(evt) {
    // will retrieve the shipment whose pickup date is greater than the selected date
    var selected_date = new Date(evt.target.value);

    const newShipment = temData.filter((shipment) => {
      var shipment_date = new Date(shipment.shipment_pickup_date);
      if (selected_date.getTime() <= shipment_date.getTime()) {
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
            <option value="">Shipment Type</option>
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>
        </div>
        <div className="shipment-date">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="seach-input">
          <span>
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            onChange={handleOtherSearch}
            placeholder="search by shipment ID,Destination"
          />
        </div>
      </div>
      <ShipmentInfo shippingData={data} />
    </div>
  );
};

export default ShipmentCustomer;
