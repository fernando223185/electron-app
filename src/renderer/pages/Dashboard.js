import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBoxOpen,
  faUsers,
  faChartBar,
  faCashRegister,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  // Opciones de accesos rápidos
  const quickAccess = [
    { name: "Ventas", icon: faShoppingCart, color: "bg-blue-500", path: "/ventas" },
    { name: "Inventario", icon: faBoxOpen, color: "bg-green-500", path: "/inventario" },
    { name: "Clientes", icon: faUsers, color: "bg-yellow-500", path: "/clientes" },
    { name: "Configuración", icon: faCog, color: "bg-gray-500", path: "/configuracion" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex-1 p-6">
        {/* Encabezado */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bienvenido</h1>

        {/* 📌 Sección de Accesos Rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {quickAccess.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer ${item.color}`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-4xl mb-2" />
              <span className="text-lg font-semibold">{item.name}</span>
            </div>
          ))}
        </div>

        {/* 📌 Sección de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Ventas Hoy</h3>
              <p className="text-2xl font-semibold text-gray-800">$12,450</p>
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-500 text-3xl" />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Productos en Stock</h3>
              <p className="text-2xl font-semibold text-gray-800">2,345</p>
            </div>
            <FontAwesomeIcon icon={faBoxOpen} className="text-gray-500 text-3xl" />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Clientes Registrados</h3>
              <p className="text-2xl font-semibold text-gray-800">832</p>
            </div>
            <FontAwesomeIcon icon={faUsers} className="text-gray-500 text-3xl" />
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm">Ventas del Mes</h3>
              <p className="text-2xl font-semibold text-gray-800">$120,980</p>
            </div>
            <FontAwesomeIcon icon={faChartBar} className="text-gray-500 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
