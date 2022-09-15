import React from "react";
import { BsGridFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { HiDocumentRemove } from "react-icons/hi";
import { HiDocumentDuplicate } from "react-icons/hi";
import { HiTruck } from "react-icons/hi";
import { IoMap } from "react-icons/io5";

export const SidebarMenu = [
  {
    icon: <BsGridFill />,
    title: "Dashboard",
    links: "/dashboard",
  },
  {
    icon: <RiAccountCircleFill />,
    title: "Admin",
    links: "/admin",
  },
  {
    icon: <IoIosPeople />,
    title: "Customer",
    links: "/customer",
  },
  {
    icon: <HiTruck />,
    title: "Shipments",
    links: "/shipment",
  },
  {
    icon: <IoMap />,
    title: "Tracking",
    links: "/tracking",
  },
  {
    icon: <HiDocumentText />,
    title: "Documents",
    links: "/docs",
  },

  {
    icon: <HiDocumentText />,
    title: "Rates",
    links: "/rates",
  },

  {
    icon: <HiDocumentRemove />,
    title: "Quotes",
    links: "/quotes",
  },
  {
    icon: <HiDocumentDuplicate />,
    title: "Invoices",
    links: "/invoices",
  },
];
