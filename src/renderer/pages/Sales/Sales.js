import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cocaCola from "../../../assets/coca_cola.png";
import sabritas from "../../../assets/sabritas.png";
import oreo from "../../../assets/galleta_oreo.png"
import ciel from "../../../assets/Ciel.png"

import {
  faArrowLeft,
  faShoppingCart,
  faPlus,
  faMinus,
  faTrash,
  faCreditCard,
  faBarcode,
  faUser,
  faExchangeAlt,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const productsList = [
  { id: 1, name: "Coca Cola 600ml", price: 18.0, image: cocaCola },
  { id: 2, name: "Sabritas 45g", price: 15.0, image: sabritas },
  { id: 3, name: "Galletas Oreo", price: 12.5, image: oreo },
  { id: 4, name: "Agua Ciel 1L", price: 10.0, image: ciel },
];

const POS = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // Agregar producto al carrito
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Modificar cantidad del producto
  const updateQuantity = (id, type) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: type === "increase" ? item.qty + 1 : item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calcular total de la compra
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Buscar productos
  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen bg-gray-100 flex flex-col p-6">
      {/* 🔙 Botón de Regresar y Opciones Extras */}
      <div className="flex justify-between items-center mb-4">
        {/* Botón Regresar */}
        <button
          className="flex items-center text-[#1D336F] font-semibold text-lg"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Regresar
        </button>

        {/* Botones de Opciones */}
        <div className="flex space-x-4">
          <button className="flex items-center bg-[#1D336F] text-white px-4 py-2 rounded-md hover:bg-[#14264D] transition">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Cliente
          </button>
          <button className="flex items-center bg-[#1D336F] text-white px-4 py-2 rounded-md hover:bg-[#14264D] transition">
            <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
            Movimientos
          </button>
          <button className="flex items-center bg-[#1D336F] text-white px-4 py-2 rounded-md hover:bg-[#14264D] transition">
            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
            Forma de Pago
          </button>
        </div>
      </div>

      {/* 🛒 Contenido Principal */}
      <div className="grid grid-cols-12 gap-6 flex-1">
        {/* 📌 Sección de Productos (40% del ancho total) */}
        <div className="col-span-5 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Productos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => addToCart(product)}
                className="p-4 bg-white border rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:scale-105 transition"
              >
                <img src={product.image} alt={product.name} className="w-20 h-20 object-contain mb-2" />
                <span className="text-lg font-semibold">{product.name}</span>
                <span className="text-sm text-gray-600">${product.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 📌 Sección del Carrito (60% del ancho total) */}
        <div className="col-span-7 bg-white p-6 rounded-xl shadow-lg flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Carrito</h2>

          {/* 🛍️ Lista de Productos en el Carrito */}
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">No hay productos</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2"
                >
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-contain mr-3" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} x {item.qty}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                      onClick={() => updateQuantity(item.id, "decrease")}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="mx-3">{item.qty}</span>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-md"
                      onClick={() => updateQuantity(item.id, "increase")}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button
                      className="ml-3 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 🏷️ Total y Cobro */}
          <div className="mt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-[#F29500]">${total.toFixed(2)}</span>
            </div>
            <button
              className="mt-4 w-full bg-[#1D336F] text-white py-2 rounded-md hover:bg-[#14264D] transition"
              disabled={cart.length === 0}
            >
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
              Cobrar
            </button>
          </div>
        </div>
      </div>

      {/* 📌 Buscador de Productos */}
      <div className="mt-6 flex items-center bg-white p-4 rounded-lg shadow-lg">
        <FontAwesomeIcon icon={faBarcode} className="text-gray-500 text-2xl mr-3" />
        <input
          type="text"
          placeholder="Escanea o busca un producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 text-lg border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default POS;
