# Internal Tools API

## Technologies

- Langage: TypeScript
- Framework: Fastify
- Base de données: PostgreSQL
- Port API: `3000` (configurable)

## Quick Start

1. `npm install`
2. Depuis le dossier back_env : `docker-compose --profile postgres up -d`
3. Depuis back_env/scripts `sh start-postgres.sh` pour lancer le serveur postgreSQL
4. `npm start`

---
Ou plus simplement :

1. `npm install` pour installer toutes les dépendances
2. `npm run all` pour démarrer l'image postgres ET démarrer le serveur de base de données ET lancer l'application

---
API disponible sur http://localhost:3000
Documentation: http://localhost:[port]/[chemin_docs]

## Configuration

- Variables d'environnement: voir .env.example
- Configuration DB: [instructions_connexion]

## Tests

`npm test` - Tests unitaires + intégration

## Architecture

- [Justification_choix_tech]
- Choix du langage TypeScript pour le développement de l'API : dérivé de JavaScript, c'est un langage populaire et
  globalement connue. La nuance vient du typage explicite et de quelques outils disponibles en plus par rapport à
  JavaScript.
- Choix du framework Fastify : Framework NodeJS rapide, leger et flexible. L'approche JSON de Fastify s'aligne également
  très bien avec le langage TypeScript et permet la validatioon de schémas de données sans librairie externe.
- [Structure_projet_expliquée]
- Découpage en MVC pour plus de lisibilité :
    - le dossier `repositories` abrite les query pour les requêtes SQL
    - le dossier `models` contient les modèles des donées telles qu'elles existent dans la base de données
    - le dossier `routes` regroupe les routes des appels API suivant le type de données recherché ((liste des
      endpoints))
    - le dossier `services` recèle les règles à appliquer aux données récupérées sans avoir besoin de modifier les
      routes
    - `app.ts` contient toutes les routes de l'application (routesTools, routesUsers etc)
- `server.ts` contient la structure pour lancer le serveur NodeJS