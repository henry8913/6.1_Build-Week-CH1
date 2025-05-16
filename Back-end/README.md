
# 🔧 Backend LinkedIn Clone

API RESTful Node.js che fornisce i servizi backend per il clone LinkedIn, gestendo autenticazione, profili e contenuti.

## 📋 Struttura del Progetto

```
Back-end/
├── controllers/      # Logica business
│   ├── authController.js    # Gestione autenticazione
│   └── profileController.js # Gestione profili
├── middleware/      # Middleware custom
│   ├── authMiddleware.js    # Verifica JWT
│   └── upload.js            # Gestione upload file
├── models/          # Modelli MongoDB
│   ├── userSchema.js        # Schema utente
│   ├── profileSchema.js     # Schema profilo
│   ├── experienceSchema.js  # Schema esperienze
│   └── educationSchema.js   # Schema formazione
├── routes/          # Route API
│   ├── authRoutes.js       # Route autenticazione
│   ├── profileRoutes.js    # Route profilo
│   └── experienceRoutes.js # Route esperienze
└── index.js         # Entry point
```

## 🚀 Tecnologie Utilizzate

- **Node.js**: Runtime JavaScript
- **Express**: Framework web
- **MongoDB**: Database NoSQL
- **Mongoose**: ODM per MongoDB
- **JWT**: Autenticazione token
- **Passport**: Strategie auth
- **Multer**: Upload file
- **Cloudinary**: Storage media

## 💻 Come Iniziare

```bash
# Installa dipendenze
npm install

# Crea file .env e inserisci le tue credenziali
consulta `file.env.example` per ulteriori dettagli

# Avvia sviluppo
npm run dev
```

## 🔑 API Endpoints

### 👤 Autenticazione

```bash
# Login
POST /auth/login
{
  "email": "user@example.com",
  "password": "password123"
}

# Registrazione
POST /auth/register
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}

# Login Google
GET /auth/google
```

### 👔 Profilo

```bash
# Get profilo
GET /profile
Authorization: Bearer <token>

# Update profilo
PUT /profile
Authorization: Bearer <token>
{
  "title": "Developer",
  "area": "Milano"
}
```

### 💼 Esperienze

```bash
# Lista esperienze
GET /experiences
Authorization: Bearer <token>

# Aggiungi esperienza
POST /experiences
Authorization: Bearer <token>
{
  "role": "Developer",
  "company": "Tech Corp",
  "startDate": "2023-01"
}
```

## 🔐 Configurazione

File `.env` necessario:
```env
# MongoDB
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Server Config
PORT=2025
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://0.0.0.0:2025

# Security
JWT_SECRET=your_jwt_secret_key
SALT_ROUNDS=10
SESSION_SECRET=your_session_secret

# Cloudinary
CLOUD_NAME=your_cloud_name
CLOUD_KEY=your_api_key
CLOUD_SECRET=your_api_secret
```

## 🛡️ Sicurezza

- **JWT**: Autenticazione basata su token
- **Bcrypt**: Hashing password sicuro
- **CORS**: Protezione cross-origin
- **Helmet**: Headers di sicurezza
- **Rate Limiting**: Protezione da DDoS

## 📊 Database

### 📝 Schema Utente
```javascript
{
  name: String,
  email: String,
  password: String,
  profile: ObjectId
}
```

### 👔 Schema Profilo
```javascript
{
  user: ObjectId,
  title: String,
  area: String,
  bio: String,
  experiences: [ExperienceSchema]
}
```

## 🧪 Testing

### API Tests
- Autenticazione
- CRUD Profilo
- Gestione Esperienze
- Upload File

### Security Tests
- Validazione JWT
- Rate Limiting
- Input Sanitization
- CORS Policy

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