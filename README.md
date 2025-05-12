<!-- 
# 📚 Documentazione del Progetto Monorepo
-->

## 🛠️ Comandi Git Essenziali per la Collaborazione nei Progetti di Gruppo

### 📥 Clonare il repository:
```bash
git clone URL_REPOSITORY
```

### 🔄 Passare al branch principale per assicurarti che sia aggiornato:
```bash
git checkout MAIN
git pull
```

### 🌿 Creare e passare al nuovo branch:
```bash
git checkout -b NOME_BRANCH
```

### 🚀 Inviare il branch al repository remoto e stabilire il tracking:
```bash
git push -u origin NOME_BRANCH
```

### ✏️ Effettuare le modifiche necessarie nel tuo codice:
*(Aggiungi qui i dettagli delle modifiche)*

### ➕ Aggiungere le modifiche all'area di staging:
```bash
git add .
```

### ✅ Eseguire il commit delle modifiche:
```bash
git commit -m "Messaggio del commit"
```

### 🔄 Aggiornare il branch prima di terminare la sessione di lavoro:
*(Assicurati di farlo prima di fare ulteriori modifiche, per evitare conflitti)*
```bash
git pull origin MAIN
```

### 🔀 Effettuare il merge del branch principale nel tuo branch:
*(Se vuoi mantenere il tuo branch aggiornato)*
```bash
git merge MAIN
```

### 📤 Push finale delle modifiche al repository remoto:
```bash
git push
```

## 🔄 Gestione del Monorepo

Il progetto utilizza una struttura monorepo con due script bash per semplificare la gestione. È importante eseguire questi script **dopo aver effettuato il commit delle modifiche nel proprio branch e aver completato il merge al branch principale (MAIN)**.

### push_subtrees.sh
Questo script consente di:
- Aggiornare le repository individuali di frontend e backend.
- Gestire il push delle modifiche utilizzando `git subtree`.
- Mantenere sincronizzati tutti i repository.

#### Come utilizzare lo script:
1. Assicurati di aver effettuato il merge delle modifiche al branch principale (MAIN).
2. Rendi lo script eseguibile:
    ```bash
    chmod +x push_subtrees.sh
    ```
3. Esegui lo script per sincronizzare le modifiche:
    ```bash
    ./push_subtrees.sh
    ```

## 🚀 Per maggiori dettagli, puoi visitare le repository individuali:
- [Repository Frontend](https://github.com/henry8913/6.1_Build-Week-CH1_Front-end.git)
- [Repository Backend](https://github.com/henry8913/6.1_Build-Week-CH1_Back-end.git)