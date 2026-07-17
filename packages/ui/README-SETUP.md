# UI Component Library

Shared React UI components for CoverCraft web and admin applications.

## Available Components

- `Button` - Customizable button with variants
- `Input` - Text input with focus styles
- `Card` - Container component
- `Badge` - Status indicator
- `Modal` - Dialog component (coming soon)
- `Dropdown` - Dropdown menu (coming soon)
- `Tabs` - Tab navigation (coming soon)

## Installation

```bash
pnpm add @covercraft/ui
```

## Usage

```tsx
import { Button, Input, Card } from '@covercraft/ui';

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary" size="lg">
        Submit
      </Button>
    </Card>
  );
}
```
