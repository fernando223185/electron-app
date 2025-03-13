import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo_expanda.png";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loginUser, error } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(formData.username, formData.password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1D336F]">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-full flex justify-center mb-6 mt-7">
          <img src={logo} alt="Logo" className="w-52 h-auto object-contain" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          {/* Usuario */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-3 text-[#1D336F]"
            />
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F29500]"
              required
            />
          </div>

          {/* Contraseña */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-3 text-[#1D336F]"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F29500]"
              required
            />
          </div>

          {/* Mostrar error si las credenciales son incorrectas */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Botón de Iniciar Sesión */}
          <button
            type="submit"
            className="w-full bg-[#F29500] text-white py-2 rounded-md hover:bg-[#d77f00] transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Enlace de Olvidó su contraseña */}
        <div className="text-center mt-4">
          <a href="#" className="text-[#1D336F] text-sm hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
