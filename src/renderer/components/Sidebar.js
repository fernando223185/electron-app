import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faBoxOpen,
  faUsers,
  faChartBar,
  faSignOutAlt,
  faUserCircle,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  // Datos del usuario (esto puede venir de un estado global o de la BD)
  const user = {
    name: "Fernando H.",
    profilePic: "", // Deja esto vacío si quieres mostrar el icono por defecto
  };

  // Opciones del menú
  const menuItems = [
    { name: "Inicio", icon: faHome, path: "/dashboard" },
    { name: "Ventas", icon: faShoppingCart, path: "/ventas" },
    { name: "Inventario", icon: faBoxOpen, path: "/inventario" },
    { name: "Clientes", icon: faUsers, path: "/clientes" },
    { name: "Configuración", icon: faCog, path: "/configuracion" },
    
  ];

  return (
    <div className="h-screen w-28 bg-[#1D336F] text-white flex flex-col items-center py-4 shadow-lg">
      {/* 📌 Sección de Usuario */}
      <div className="flex flex-col items-center mb-6">
        {user.profilePic ? (
          <img
            src={user.profilePic}
            alt="Perfil"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
        ) : (
          <FontAwesomeIcon icon={faUserCircle} className="text-6xl text-gray-300" />
        )}
        <span className="text-sm font-semibold mt-2">{user.name}</span>
      </div>

      {/* 📌 Menú */}
      <div className="flex flex-col space-y-6 w-full">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center w-full py-2 hover:bg-[#F29500] rounded-lg transition duration-300"
            onClick={() => navigate(item.path)}
          >
            <FontAwesomeIcon icon={item.icon} className="text-3xl mb-1" />
            <span className="text-xs">{item.name}</span>
          </button>
        ))}
      </div>

      {/* 📌 Botón de Cerrar Sesión */}
      <div className="mt-auto mb-4">
        <button
          className="flex flex-col items-center w-full py-2 text-red-500 hover:bg-red-700 hover:text-white rounded-lg transition duration-300"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="text-3xl mb-1" />
          <span className="text-xs">Salir</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
