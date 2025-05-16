
# 🎨 Frontend LinkedIn Clone

Interfaccia utente React che replica fedelmente l'esperienza LinkedIn, offrendo un'interfaccia moderna e reattiva.

## 📋 Struttura del Progetto

```
Front-end/
├── src/
│   ├── components/     # Componenti React riutilizzabili
│   │   ├── css/       # Stili dei componenti
│   │   ├── Mynav.jsx  # Navigazione principale
│   │   └── ...        # Altri componenti
│   ├── context/       # Context per lo stato globale
│   ├── pages/         # Pagine dell'applicazione
│   └── config/        # Configurazioni axios
├── public/            # Asset statici
└── vite.config.js     # Configurazione Vite
```

## 🚀 Tecnologie Utilizzate

- **React 19**: Framework UI moderno
- **Vite**: Build tool performante
- **Bootstrap 5**: Framework CSS responsive
- **React Bootstrap**: Componenti UI
- **React Router**: Gestione routing
- **Axios**: Client HTTP
- **Context API**: Gestione stato
- **React Icons**: Libreria icone

## 💻 Come Iniziare

```bash
# Installa dipendenze
npm install

# Copia configurazione
consulta `file.env.example` per ulteriori dettagli

# Avvia in sviluppo
npm run dev
```

## 🔐 Configurazione

File `.env` necessario:
```env
# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_GOOGLE_CLIENT_SECRET=your_google_client_secret

# API URLs
VITE_BACKEND_URL=http://localhost:2025
VITE_FRONTEND_URL=http://localhost:5173
```

## 🎯 Componenti Principali

### 🔝 Navbar (`Mynav.jsx`)
- Navigazione responsive
- Ricerca profili real-time
- Menu utente e notifiche
- Gestione autenticazione

### 👤 Profilo (`HeroComponent.jsx`)
- Banner personalizzabile
- Foto profilo con upload
- Informazioni professionali
- Collegamenti e network

### 💼 Esperienze (`ExperienceComponent.jsx`)
- Timeline lavorativa
- CRUD esperienze
- Gestione certificati
- Ordinamento cronologico

### 🎓 Formazione (`EducationComponent.jsx`)
- Percorso formativo
- Titoli di studio
- Certificazioni
- Competenze

## 🛡️ Sicurezza

- **JWT**: Gestione token
- **Protected Routes**: Route protette
- **Auth Context**: Stato autenticazione
- **OAuth**: Login social
- **CORS**: Sicurezza richieste

## 📊 Stato Applicazione

### 📝 Context API
```javascript
{
  user: {
    id: String,
    name: String,
    email: String,
    profile: Object
  },
  auth: {
    token: String,
    isAuthenticated: Boolean
  }
}
```

## 🧪 Testing

### API Tests
- Autenticazione
- CRUD Profilo
- Gestione Media
- Upload File

### UI Tests
- Responsive Design
- Accessibilità
- Performance
- Cross-browser

## 📱 Responsive Design

- **Desktop**: >1200px
- **Tablet**: 768px-1199px
- **Mobile**: <767px

## 🔄 Integrazione API

- Chiamate REST/Axios
- Gestione token
- Refresh automatico
- Intercettori errori

## 👥 Team di Sviluppo
- [henry8913](https://github.com/henry8913)
- [Alina-Galben](https://github.com/Alina-Galben)
- [AriannaDeSabata](https://github.com/AriannaDeSabata)
- [Giovanni-code-dev](https://github.com/Giovanni-code-dev)
- [IvanFucchi](https://github.com/IvanFucchi)

## 🤝 Come Contribuire

Siamo entusiasti di accogliere contributi dalla community! Se desideri partecipare al miglioramento di questo progetto, ecco come puoi farlo:

1. **Crea un Branch**: Sviluppa le tue modifiche in un branch dedicato
   ```bash
   git checkout -b feature/nome-feature
   ```

2. **Sviluppa**: Implementa le tue modifiche seguendo le best practice del progetto

3. **Testa**: Assicurati che il codice funzioni correttamente e non introduca problemi

4. **Documenta**: Aggiorna la documentazione se necessario

5. **Crea una Pull Request**: Invia le tue modifiche attraverso una PR con una chiara descrizione delle modifiche

### 📋 Linee Guida per i Contributi
- Mantieni uno stile di codice coerente
- Scrivi test per le nuove funzionalità
- Documenta le modifiche significative
- Segui i principi SOLID e le best practice React/Node.js
- Mantieni le modifiche focused e di dimensioni gestibili

## 👤 Autori

Progetto demo creato da [Team 3](https://github.com/henry8913/6.1_Build-Week-CH1/graphs/contributors) per scopi didattici.

## 📝 Licenza
Questo progetto è distribuito con licenza MIT.
