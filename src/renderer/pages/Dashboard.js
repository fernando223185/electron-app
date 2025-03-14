import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBoxOpen,
  faUsers,
  faChartBar,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Opciones de accesos rápidos
  const quickAccess = [
    { name: "Ventas", icon: faShoppingCart, color: "from-[#F29500] to-[#d77f00]", path: "/salesMenu" },
    { name: "Inventario", icon: faBoxOpen, color: "from-green-500 to-green-700", path: "/inventario" },
    { name: "Clientes", icon: faUsers, color: "from-yellow-500 to-yellow-700", path: "/clientes" },
    { name: "Configuración", icon: faCog, color: "from-gray-500 to-gray-700", path: "/configuracion" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex-1 p-8">
        {/* Encabezado con línea divisoria */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <div className="h-1 w-36 bg-[#F29500] rounded mt-2"></div>
        </div>

        {/* 📌 Sección de Accesos Rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {quickAccess.map((item, index) => (
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

        {/* 📌 Sección de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-6 shadow-md rounded-xl flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Ventas Hoy</h3>
              <p className="text-2xl font-semibold text-gray-800">$12,450</p>
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className="text-[#F29500] text-4xl" />
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Productos en Stock</h3>
              <p className="text-2xl font-semibold text-gray-800">2,345</p>
            </div>
            <FontAwesomeIcon icon={faBoxOpen} className="text-green-500 text-4xl" />
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Clientes Registrados</h3>
              <p className="text-2xl font-semibold text-gray-800">832</p>
            </div>
            <FontAwesomeIcon icon={faUsers} className="text-yellow-500 text-4xl" />
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Ventas del Mes</h3>
              <p className="text-2xl font-semibold text-gray-800">$120,980</p>
            </div>
            <FontAwesomeIcon icon={faChartBar} className="text-gray-500 text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
