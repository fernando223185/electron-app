const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  loginUser: (credentials) => ipcRenderer.invoke("login-user", credentials)
});
