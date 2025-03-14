import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHistory,
  faBox,
  faCreditCard,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

const SalesMenu = () => {
  const navigate = useNavigate();

  // Opciones del menú de ventas con mejoras visuales
  const menuOptions = [
    { name: "Nueva Venta", icon: faShoppingCart, color: "from-[#F29500] to-[#d77f00]", path: "/sales/new" },
    { name: "Historial", icon: faHistory, color: "from-[#F29500] to-[#d77f00]", path: "/sales/history" },
    { name: "Productos", icon: faBox, color: "from-[#F29500] to-[#d77f00]", path: "/sales/products" },
    { name: "Cobrar", icon: faCreditCard, color: "from-[#F29500] to-[#d77f00]", path: "/sales/checkout" },
    { name: "Facturación", icon: faReceipt, color: "from-[#F29500] to-[#d77f00]", path: "/sales/invoice" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex-1 p-8">
        {/* Encabezado con línea divisoria */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Menú de Ventas</h1>
          <div className="h-1 w-36 bg-[#F29500] rounded mt-2"></div>
        </div>

        {/* 📌 Opciones del Menú de Ventas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {menuOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`p-6 rounded-2xl text-white flex flex-col items-center justify-center 
              shadow-lg hover:scale-105 transition duration-300 cursor-pointer 
              bg-gradient-to-br ${item.color}`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-5xl mb-3" />
              <span className="text-xl font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesMenu;
