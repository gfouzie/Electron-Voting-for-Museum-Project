const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

process.env.NODE_ENV = "production";

// Add developer tools option if in dev
if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        role: "reload",
      },
      {
        label: "Toggle DevTools",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  });
}
let mainWin;

const createWindow = () => {
  mainWin = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 1200,
    height: 600,
    backgroundColor: "#ffffff",
    icon: `file://${__dirname}/public/img/logo.png`,
  });

  mainWin.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/chart.html"),
      protocol: "file",
      slashes: true,
    })
  );
  mainWin.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/voting.html"),
      protocol: "file",
      slashes: true,
    })
  );
  mainWin.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/index.html"),
      protocol: "file",
      slashes: true,
    })
  );
  // Open the DevTools.
  mainWin.webContents.openDevTools();

  mainWin.on("closed", () => {
    mainWin = null;
    app.quit();
  });
};

app.on("ready", async () => {
  await createWindow();
});
