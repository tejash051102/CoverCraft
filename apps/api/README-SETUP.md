# Backend API Documentation

## Setup

```bash
cd apps/api
pnpm install
```

## Environment Variables

Create `.env.local` file in the root directory with MongoDB URI and JWT secret.

## Development

```bash
pnpm dev
```

Server runs on `http://localhost:3001`

## API Endpoints

### Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/refresh-token`
- `POST /api/v1/auth/logout`

### Users
- `GET /api/v1/users/profile`
- `PUT /api/v1/users/profile`

### Institutions
- `GET /api/v1/institutions`
- `GET /api/v1/institutions/:id`
- `GET /api/v1/institutions/search/autocomplete`

### Templates
- `GET /api/v1/templates`
- `POST /api/v1/templates`
- `PUT /api/v1/templates/:id`

### Projects
- `GET /api/v1/projects`
- `POST /api/v1/projects`
- `PUT /api/v1/projects/:id`
- `DELETE /api/v1/projects/:id`
- `POST /api/v1/projects/:id/export`

### Upload
- `POST /api/v1/upload/image`
- `POST /api/v1/upload/logo`
