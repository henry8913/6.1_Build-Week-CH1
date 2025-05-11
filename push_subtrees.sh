# Script to push changes from subtrees to their respective repositories

#!/bin/bash

# === CONFIGURAZIONE ===
FRONTEND_PREFIX="Front-end"
BACKEND_PREFIX="Back-end"
FRONTEND_REMOTE="frontend"
BACKEND_REMOTE="backend"
FRONTEND_BRANCH="main"
BACKEND_BRANCH="main"
# ======================

echo "🚀 Spingo le modifiche di Front-end alla sua repo..."
git subtree push --prefix=$FRONTEND_PREFIX $FRONTEND_REMOTE $FRONTEND_BRANCH

echo "🚀 Spingo le modifiche di Back-end alla sua repo..."
git subtree push --prefix=$BACKEND_PREFIX $BACKEND_REMOTE $BACKEND_BRANCH

echo "✅ Push completato! Le repo originali sono aggiornate."
