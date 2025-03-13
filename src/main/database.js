const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Definir la ruta donde se guardará la base de datos
const dbPath = path.join(__dirname, 'database.sqlite');
console.log('📁 La base de datos se guardará en:', dbPath);

// Crear conexión con SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Error al conectar con SQLite:', err.message);
    } else {
        console.log('✅ Conectado a la base de datos SQLite');
    }
});

// Crear tabla de usuarios si no existe
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('❌ Error al crear la tabla:', err.message);
        } else {
            console.log('✅ Tabla de usuarios creada correctamente');
        }
    });
});

// Función para insertar usuario
function getUser(username, password) {

    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
}
  


module.exports = {
    db,
    getUser
};
