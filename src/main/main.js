const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { getUser } = require('./database'); // Importamos SQLite

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js') // Seguridad con Preload
        }
    });

    mainWindow.loadURL(
        isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => (mainWindow = null));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.handle('login-user', async (_, { username, password }) => {
    console.log("🔹 Evento 'login-user' recibido en main.js");
    console.log("👤 Usuario:", username, "🔑 Contraseña:", password);
    try {
        const user = await getUser(username, password);

        if (user && user.password === password) {
            return { success: true, user };
        } else {
            return { success: false, error: 'Usuario o contraseña incorrectos.' };
        }
    } catch (error) {
        console.error("❌ Error al iniciar sesión:", error);
        return { success: false, error: 'Error interno del servidor.' };
    }
});
