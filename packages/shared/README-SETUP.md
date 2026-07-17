# Shared Utilities Package

Shared TypeScript utilities, validation schemas, and helpers for CoverCraft.

## Exports

### Schemas (Zod)
- `registerSchema`
- `loginSchema`
- `projectSchema`
- `institutionSchema`

### Utilities
- `generateId()` - Generate UUID
- `generateToken()` - Generate random token
- `generateSlug()` - Convert text to URL-friendly slug
- `truncate()` - Truncate text with ellipsis

## Usage

```typescript
import { registerSchema, generateId } from '@covercraft/shared';

const data = registerSchema.parse({
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe',
});

const userId = generateId();
```
