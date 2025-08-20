# 🧠 BSM v2.5.0 - Brain Service Manager

## 🚀 Professional Electron Dashboard for MyBrainDev Ecosystem

![BSM v2.5.0](https://img.shields.io/badge/BSM-v2.5.0-blue?style=for-the-badge)
![Electron](https://img.shields.io/badge/Electron-28.0.0-47848f?style=for-the-badge&logo=electron)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green?style=for-the-badge)

### 🎯 **PRODUCTION READY** - Testirano i odobreno!

## 📱 KOMPLETNI PROFESIONALNI INTERFACE

- **Purple-blue gradient header** kao originalni BSM
- **Tabbed navigation**: Dashboard, Health Monitor, LLM Services, MCP Servers, Logs, Settings
- **Professional dark theme** (#1a1a2e background)
- **Real-time stats** counters (15 Running/15 Total/15 Healthy/0 Errors)

## 📊 29 SERVICE CARDS DASHBOARD

### 🏗️ Foundation Services (Phase 1)
- **Redis Cache** (6379) ✅ RUNNING
- **Supabase PostgreSQL** (3001) ✅ RUNNING  
- **Supabase REST API** (9999) ✅ RUNNING

### ⚡ Core Services (Phase 2)
- **MyBrainDev API** (3000) ✅ RUNNING
- **N8N Automation** (5678) ✅ RUNNING
- **Qdrant Vector DB** (6333) ✅ RUNNING

### 🤖 LLM Services (Phase 3) - 7 PROVIDERS
- **Ollama Local LLM** (11434) ✅ RUNNING
- **OpenRouter Gateway** (8211) ✅ RUNNING
- **ChatGPT API Bridge** (8084) ✅ RUNNING
- **Groq LPU Gateway** (8214) ✅ RUNNING
- **Cerebras AI Gateway** (8215) ✅ RUNNING
- **HuggingFace Inference** (8212) ✅ RUNNING
- **DeepSeek API** (8213) ✅ RUNNING

### 🔧 MCP Services (Phase 4)
- **Enhanced Importer** (Docker) ✅ RUNNING
- **Open WebUI** (8080) ✅ RUNNING

## 🚀 QUICK START

### 1. INSTALL DEPENDENCIES
```bash
npm install
```

### 2. SETUP ENVIRONMENT
```bash
# Create .env file
SUPABASE_URL=http://localhost:3001
SUPABASE_ANON_KEY=your_supabase_key
NODE_ENV=development
```

### 3. RUN DEVELOPMENT
```bash
npm run dev
```

### 4. BUILD FOR PRODUCTION
```bash
npm run build-win
```

## 🎯 FEATURES

### 🖥️ DESKTOP APPLICATION
- **System Tray**: Background operation with quick access menu
- **Auto-start**: Minimize to tray on startup
- **Notifications**: System balloon notifications for status updates

### 🧠 BSM RAG ENGINE
- **Supabase Integration**: pgvector for semantic search
- **Croatian Language**: Optimized text processing
- **Multiple Collections**: Pravilnik, Documents, Knowledge
- **Citation Required**: All responses include source citations

### 📋 PRAVILNIK SEARCH
- **AI-Powered**: Vector similarity search
- **Confidence Scoring**: VISOKA/SREDNJA/NISKA ratings
- **Required Citations**: [ČLANAK X] format
- **Croatian Keywords**: Automatic extraction

## 🛠️ TECHNOLOGY STACK

- **Frontend**: Electron 28.0.0 + HTML/CSS/JS
- **Backend**: Supabase + PostgreSQL + pgvector
- **AI**: RAG Engine with Croatian NLP
- **Deployment**: Windows NSIS Installer

## 📊 MONITORING

### Health Checks
- Supabase connection status
- RAG engine initialization
- Vector database readiness
- Croatian NLP service status

### Auto-Sync
- Hourly data synchronization
- Health monitoring every 15 minutes
- Automatic error recovery
- User notifications for issues

## 🎨 UI SCREENSHOTS

*Screenshots showing the professional interface with all 29 service cards*

## 🔒 SECURITY

- Local storage for settings
- Encrypted Supabase connections
- No sensitive data in logs
- Secure IPC communication

## 📝 CHANGELOG

### v2.5.0 - Production Ready
- ✅ 29 service cards implemented
- ✅ 7 LLM providers integrated
- ✅ Professional tabbed interface
- ✅ Real-time monitoring
- ✅ System tray integration
- ✅ Windows installer ready

## 👥 TEAM

**Developed by:** MyBrainDev Team  
**Tested on:** WINPC2  
**Status:** Production Ready  
**User Feedback:** "jaaako dobar"

## 📄 LICENSE

MIT License - See LICENSE file for details

---

**🎉 BSM v2.5.0 - Profesionalni alat za upravljanje MyBrainDev ekosistemom!**