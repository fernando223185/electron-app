import { useState } from "react";
import { useNavigate } from "react-router-dom"; 


export function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 


  const isOnline = () => navigator.onLine;

  const loginUser = async (username, password) => {
    setError(null);

    /*if (isOnline()) {
      console.log("🔗 Conectado a Internet. Aquí se llamaría a la API.");
      return;
    }*/

    try {
      const response = await window.electron.loginUser({ username, password });
      console.log(response)

      if (response.success) {
        setUser(response.user);
        navigate("/dashboard");
      } else {
        setError("Usuario o contraseña incorrectos.");
      }
    } catch (err) {
      setError("Error al iniciar sesión.");
      console.error(err);
    }
  };

  return { user, error, loginUser };
}
