// BSM v2.5.0 - Simplified Test Version
const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');
const winston = require('winston');

class BSMTestApp {
    constructor() {
        this.mainWindow = null;
        this.tray = null;
        
        // Simple logger
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.simple(),
            transports: [
                new winston.transports.Console()
            ]
        });
        
        this.initializeApp();
    }

    initializeApp() {
        // Wait for Electron to be ready
        app.whenReady().then(() => {
            this.createWindow();
            this.createTray();
            this.logger.info('🧠 BSM v2.5.0 Test App started successfully!');
        });

        // Handle app events
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow();
            }
        });
    }

    createWindow() {
        this.mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            title: 'BSM v2.5.0 - Brain Startup Manager',
            icon: path.join(__dirname, '../assets/bsm-icon.png'),
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });

        // Load simple HTML content
        this.mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));
        
        // Show dev tools for debugging
        this.mainWindow.webContents.openDevTools();

        this.logger.info('✅ Main window created');
    }

    createTray() {
        try {
            // Create tray icon
            const iconPath = path.join(__dirname, '../assets/bsm-tray.png');
            this.tray = new Tray(iconPath);

            const contextMenu = Menu.buildFromTemplate([
                { label: 'Show BSM', click: () => this.mainWindow.show() },
                { label: 'Hide BSM', click: () => this.mainWindow.hide() },
                { type: 'separator' },
                { label: 'Quit BSM', click: () => app.quit() }
            ]);

            this.tray.setToolTip('BSM v2.5.0 - Brain Startup Manager');
            this.tray.setContextMenu(contextMenu);
            
            // Click to show/hide window
            this.tray.on('click', () => {
                this.mainWindow.isVisible() ? this.mainWindow.hide() : this.mainWindow.show();
            });

            this.logger.info('✅ System tray created');
        } catch (error) {
            this.logger.error('❌ Tray creation failed:', error);
        }
    }
}

// Start the app
new BSMTestApp();

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
});