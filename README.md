# 📝 ZeusToDo

Application de gestion de tâches construite avec **React + Vite + Supabase**.

## Fonctionnalités

- Lister les tâches depuis Supabase
- Ajouter une tâche
- Marquer une tâche comme terminée (ou la reprendre)
- Supprimer une tâche

## Installation

1. **Clonez le projet** :

   ```bash
   git clone https://github.com/zeuscristian-ai/ToDo-supabase.git
   cd ToDo-supabase
   ```

2. **Installez les dépendances** :

   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement** : créez un fichier `.env` à la racine (voir `.env.example`) :

   ```
   VITE_SUPABASE_URL=https://votre-projet.supabase.co
   VITE_SUPABASE_ANON_KEY=votre_cle_publishable
   ```

4. **Lancez le serveur de développement** :

   ```bash
   npm run dev
   ```

## Liens utiles

- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Vite](https://vitejs.dev)
