const db = require('./database');
const axios = require('axios');

const API_URL = 'https://miapi.com/login'; // URL de la API en .NET

async function loginUsuario(usuario, password) {
  try {
    // Verificar si el usuario existe en la base de datos local
    const usuarioLocal = await db('usuarios').where({ usuario, password }).first();
    
    if (usuarioLocal) {
      console.log('✅ Usuario autenticado localmente.');
      return { success: true, usuario: usuarioLocal };
    }

    console.log('🌐 Intentando autenticación en la API...');
    
    // Intentar autenticación en la API
    const response = await axios.post(API_URL, { usuario, password });
    
    if (response.data.success) {
      // Guardar el usuario en la base local
      await db('usuarios').insert({
        usuario,
        password,
        nombre: response.data.nombre,
        sincronizado: true
      });

      console.log('✅ Usuario autenticado desde la API y guardado localmente.');
      return { success: true, usuario: response.data };
    }

    return { success: false, message: 'Credenciales incorrectas.' };
  } catch (error) {
    console.error('❌ Error en login:', error.message);
    return { success: false, message: 'No hay conexión y el usuario no existe localmente.' };
  }
}

module.exports = { loginUsuario };
