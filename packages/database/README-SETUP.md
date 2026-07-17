# Database Package

MongoDB schemas and models for CoverCraft.

## Models

- `User` - User accounts and authentication
- `Institution` - College/University data
- `Project` - User cover page projects
- `Template` - Design templates

## Usage

```typescript
import { User, Institution, Project, Template } from '@covercraft/database';

// Create a new user
const user = new User({
  email: 'student@example.com',
  password: 'hashed-password',
  name: 'John Doe',
  role: 'student',
});

await user.save();
```

## Migration

```bash
pnpm db:migrate
```

## Seed

```bash
pnpm db:seed
```
