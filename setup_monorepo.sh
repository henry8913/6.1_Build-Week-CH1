#!/bin/bash

# === CONFIGURAZIONE ===
FRONTEND_REPO="https://github.com/henry8913/6.1_Build-Week-CH1_Front-end.git"
BACKEND_REPO="https://github.com/henry8913/6.1_Build-Week-CH1_Back-end.git"
FRONTEND_BRANCH="main"
BACKEND_BRANCH="main"
# ======================

echo "📂 Siamo già dentro la repo monorepo corrente: $(pwd)"
echo "✅ Inizializzo Git solo se serve..."
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || git init

echo "🔗 Aggiungo le repo remote temporanee"
git remote add frontend $FRONTEND_REPO
git remote add backend $BACKEND_REPO

echo "⬇️ Fetch dei contenuti"
git fetch frontend
git fetch backend

echo "🌲 Aggiunta della subtree: Front-end/"
git subtree add --prefix=Front-end frontend $FRONTEND_BRANCH --squash

echo "🌲 Aggiunta della subtree: Back-end/"
git subtree add --prefix=Back-end backend $BACKEND_BRANCH --squash

echo "✅ Monorepo pronta! Le cartelle Front-end/ e Back-end/ sono state importate."

echo ""
echo "🧠 Ora puoi fare il primo commit se serve:"
echo "   git commit -am 'Import Front-end and Back-end with subtree'"
