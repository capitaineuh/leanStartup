# Plateforme d'Appels d'Offres pour Artisans

Cette plateforme permet aux artisans et professionnels de métiers manuels de consulter et répondre à des appels d'offres.

## Structure du Projet

- `frontend/` : Application Next.js (TypeScript + Tailwind CSS)
- `backend/` : API NestJS (TypeScript + MongoDB)

## Prérequis

- Node.js (v18 ou supérieur)
- npm
- MongoDB

## Installation

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

## Démarrage

### Frontend

```bash
cd frontend
npm run dev
```

L'application sera accessible sur http://localhost:3000

### Backend

```bash
cd backend
npm run start:dev
```

L'API sera accessible sur http://localhost:3001

## Fonctionnalités

- Authentification (inscription/connexion)
- Profil utilisateur
- Consultation des appels d'offres
- Filtrage par localisation et domaine d'activité 