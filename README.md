<!-- 
# 📚 Documentazione del Progetto Monorepo
-->

## 🔄 Gestione del Monorepo

Il progetto utilizza una struttura monorepo con due script bash per semplificare la gestione:

### setup_monorepo.sh
Script per l'inizializzazione del monorepo che:
- Configura le repository remote per frontend e backend
- Importa il codice utilizzando git subtree
- Mantiene la cronologia dei commit

### push_subtrees.sh
Script per la sincronizzazione che:
- Aggiorna le repository individuali di frontend e backend
- Gestisce il push delle modifiche attraverso git subtree
- Mantiene sincronizzati tutti i repository

Per utilizzare gli script:
```bash
# Rendi gli script eseguibili
chmod +x setup_monorepo.sh
chmod +x push_subtrees.sh

# Setup iniziale
./setup_monorepo.sh

# Push delle modifiche
./push_subtrees.sh
```

## 🚀 Per maggiori dettagli, puoi visitare le repository individuali:
- [Repository Frontend](https://github.com/henry8913/6.1_Build-Week-CH1_Front-end.git)
- [Repository Backend](https://github.com/henry8913/6.1_Build-Week-CH1_Back-end.git)