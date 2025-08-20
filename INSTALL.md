# 🚀 BSM v2.5.0 INSTALLATION GUIDE

## 📋 Prerequisites

### System Requirements
- **OS:** Windows 10/11, macOS 10.13+, or Linux (Ubuntu 18.04+)
- **RAM:** Minimum 4GB, Recommended 8GB
- **Storage:** 2GB free space
- **Network:** Internet connection for dependencies

### Software Dependencies
- **Node.js:** v16.0.0 or higher
- **NPM:** v8.0.0 or higher  
- **Git:** For cloning repository

## ⚡ Quick Installation

### Option 1: Clone from GitHub
```bash
git clone https://github.com/Ivetina/BSM-v2.5.0.git
cd BSM-v2.5.0
npm install
```

### Option 2: Download ZIP
1. Download ZIP from GitHub
2. Extract to desired location
3. Open terminal in extracted folder
4. Run `npm install`

## 🔧 Setup Configuration

### 1. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your settings
# Update Supabase URL, API keys, etc.
```

### 2. Create Assets Folder (Optional)
```bash
mkdir assets
# Add your custom icons:
# - bsm-icon.png (256x256)
# - bsm-tray.png (32x32)  
# - bsm-icon.ico (Windows)
```

## 🎯 Running BSM v2.5.0

### Development Mode
```bash
# Start with DevTools enabled
npm run dev

# Or standard start
npm start
```

### Production Mode
```bash
# Build Windows installer
npm run build-win

# Build for current platform
npm run build

# Package without installer
npm run pack
```

## 🛠️ Service Configuration

### Supabase Setup
1. Install Supabase CLI
2. Start local instance: `supabase start`
3. Update .env with local URLs
4. Enable pgvector extension

### Docker Services (Optional)
```bash
# Start required Docker containers
docker-compose up -d

# Verify services
docker ps
```

### LLM Services Setup
1. **Ollama:** Install and start local instance
2. **OpenRouter:** Get API key from openrouter.ai
3. **ChatGPT:** Get OpenAI API key
4. **Groq:** Get Groq API key
5. **HuggingFace:** Get HF API token

## 🎨 Customization

### Custom Icons
- Replace files in `assets/` folder
- Icons should be square (256x256 recommended)
- Support PNG, ICO formats

### Theme Customization
- Edit `src/renderer/styles.css`
- Modify color variables
- Adjust gradient values

### Service Configuration
- Edit service definitions in `src/renderer/app.js`
- Add/remove services from the array
- Update ports and descriptions

## 🔍 Troubleshooting

### Common Issues

**Node.js Version Error:**
```bash
# Check version
node --version

# Install latest LTS
# Visit nodejs.org
```

**Permission Errors (Linux/Mac):**
```bash
# Fix NPM permissions
sudo chown -R $(whoami) ~/.npm
```

**Port Conflicts:**
- Check which services are using required ports
- Update .env file with alternative ports
- Restart conflicting services

**Asset Loading Issues:**
- Ensure assets/ folder exists
- Check file permissions
- Verify icon file formats

### Windows Specific

**PowerShell Execution Policy:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Missing Build Tools:**
```bash
npm install --global windows-build-tools
```

### macOS Specific

**Xcode Command Line Tools:**
```bash
xcode-select --install
```

**Code Signing (for distribution):**
- Configure Apple Developer account
- Update build configuration

## 📊 Health Verification

### Check Installation
```bash
# Verify Node.js
node --version

# Verify NPM
npm --version

# Check dependencies
npm list
```

### Test Application
1. Start BSM: `npm start`
2. Check all tabs load properly
3. Verify service cards display
4. Test service actions (Start/Stop)
5. Check system tray functionality

## 🎯 Production Deployment

### Windows Installer
```bash
npm run build-win
# Creates installer in dist/ folder
```

### Auto-start Configuration
- Installer can configure auto-start
- Manual: Add to Windows Startup folder
- Registry: Set startup registry entries

### System Tray Setup
- Automatically configured in production
- Background operation enabled
- Notification system active

## 📝 Post-Installation

### First Run Checklist
- [ ] All dependencies installed
- [ ] Environment configured
- [ ] Assets folder created
- [ ] Services responding
- [ ] Tray icon working
- [ ] Health monitoring active

### Optional Setup
- [ ] Docker services running
- [ ] LLM providers configured
- [ ] Backup system enabled
- [ ] Monitoring dashboard setup

## 🆘 Support

### Getting Help
- **GitHub Issues:** Report bugs and feature requests
- **Documentation:** Read CHANGELOG.md for updates
- **Configuration:** Check .env.example for all options

### Logs and Debugging
- Enable debug mode: Set `DEBUG=true` in .env
- Check browser DevTools (F12)
- Review application logs in logs/ folder

---

**🎉 BSM v2.5.0 Installation Complete!**  
**Ready to manage your MyBrainDev ecosystem professionally!**