# Internal Tools API

## Technologies

- Langage: TypeScript
- Framework: Fastify
- Base de données: PostgreSQL
- Port API: `3000` (configurable dans le fichier `.env` à créer à la racine)

## Quick Start

1. `npm install`
2. Depuis le dossier back_env : `docker-compose --profile postgres up -d`
3. Depuis back_env/scripts `sh start-postgres.sh` pour lancer le serveur postgreSQL
4. `npm start`

**Ou plus simplement** :

1. `npm install` pour installer toutes les dépendances
2. `npm run all` pour démarrer l'image postgres ET démarrer le serveur de base de données ET lancer l'application


API disponible sur http://localhost:3000

Documentation: http://localhost:300/api/docs

## Configuration

- Configuration DB: voir `readme.md`de back_env
- Créer un fichier `.env` à la racine avec les variables `DATABASE_URL` et `PORT` qui seront utilisées par le
  serveur

## Tests

`npm test` - Tests unitaires + intégration

## Architecture

### TypeScript

- dérivé de JavaScript, langage populaire et
  globalement connue.
- Typage explicite pour limiter les erreurs de typage
- et de quelques outils disponibles en plus par rapport à
  JavaScript.

### Fastify

- Framework NodeJS rapide, léger et flexible.
- Approche JSON de Fastify s'aligne très bien avec le langage TypeScript
    - Permet la validation de schémas de données sans librairie externe.
- Plus complet que ExpressJS

### Structure_projet_expliquée

- Découpage en MVC pour plus de lisibilité:
    - le dossier `repositories` abrite les query pour les requêtes SQL
    - le dossier `models` contient les modèles des donées telles qu'elles existent dans la base de données
    - le dossier `routes` regroupe les routes des appels API suivant le type de données recherché ((liste des
      endpoints))
    - le dossier `services` recèle les règles à appliquer aux données récupérées sans avoir besoin de modifier les
      routes
    - `app.ts` contient toutes les routes de l'application (routesTools, routesUsers etc)
- `server.ts` contient la structure pour lancer le serveur NodeJS