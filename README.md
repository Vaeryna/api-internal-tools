# Internal Tools API

## Technologies
- Langage: TypeScript
- Framework: Fastify
- Base de données: PostgreSQL
- Port API: `3000` (configurable)

## Quick Start

1. `docker-compose --profile postgres up -d` 
2. ` sh start-postgres.sh` pour lancer le serveur postgreSQL
3. `npm install`
4. . `npm start`
5. API disponible sur http://localhost:3000
6. Documentation: http://localhost:[port]/[chemin_docs]

## Configuration
- Variables d'environnement: voir .env.example
- Configuration DB: [instructions_connexion]

## Tests  
`npm test` - Tests unitaires + intégration

## Architecture
- [Justification_choix_tech]
- Choix du langage TypeScript pour le développement de l'API : dérivé de JavaScript, c'est un langage populaire et globalement connue. La nuance vient du typage explicite et de quelques outils disponibles en plus par rapport à JavaScript.
- Choix du framework Fastify : Framework NodeJS rapide, leger et flexible. L'approche JSON de Fastify s'aligne également très bien avec le langage TypeScript et permet la validatioon de schémas de données sans librairie externe.
- [Structure_projet_expliquee]
- Découpage en MVC pour plus de lisibilité : 
  - le dossier `repositories` abrite les query pour les requêtes SQL
  - le dossier `models` contient les modèles des donées telles qu'elles existent dans la base de données
  - le dossier `routes` regroupe les routes des appels API suivant le type de données recherché ((liste des endpoints))
  - le dossier `services` recèle les règles à appliquer aux données récupérées sans avoir besoin de modifier les routes
  - `app.ts` contient toutes les routes de l'application (routesTools, routesUsers etc)
- `server.ts` contient la structure pour lancer le serveur NodeJS