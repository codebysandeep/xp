# shadcn/ui Integration Guide

This project now has shadcn/ui fully integrated with Astro and Tailwind CSS!

## 🎨 What's Included

- **React Support** - Astro React integration for using React components
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Configured with shadcn's design system
- **TypeScript** - Full type safety with path aliases

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   └── button.tsx   # Example Button component
│   └── ButtonDemo.tsx   # Demo React component
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── styles/
    └── globals.css      # Global styles with CSS variables
```

## 🚀 Using shadcn/ui Components

### 1. **In React Components**

Create a `.tsx` file and use shadcn components:

```tsx
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <Button onClick={() => alert('Hello!')}>
      Click Me
    </Button>
  )
}
```

### 2. **In Astro Pages**

Import React components and use them with `client:` directives:

```astro
---
import { MyComponent } from '../components/MyComponent';
---

<div>
  <MyComponent client:load />
</div>
```

**Client Directives:**
- `client:load` - Load immediately
- `client:idle` - Load when browser is idle
- `client:visible` - Load when visible in viewport
- `client:only="react"` - Only render on client

## 📦 Adding More shadcn Components

You can add any shadcn/ui component using the CLI:

```bash
# Navigate to the project directory
cd apps/clients/sadhtaxadv

# Add a component (examples)
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add dropdown-menu
npx shadcn@latest add accordion
```

**Popular components:**
- `button` ✅ (already added)
- `card` - Card containers
- `dialog` - Modal dialogs
- `input` - Form inputs
- `select` - Dropdown selects
- `textarea` - Text areas
- `accordion` - Collapsible sections
- `alert-dialog` - Confirmation dialogs
- `avatar` - User avatars
- `badge` - Status badges
- `checkbox` - Checkboxes
- `dropdown-menu` - Dropdown menus
- `tabs` - Tab navigation
- `toast` - Toast notifications

[Browse all components](https://ui.shadcn.com/docs/components)

## 🎨 Theming

### CSS Variables

The theme is controlled by CSS variables in `src/styles/globals.css:10-53`.

To customize colors, modify the HSL values:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Change this for primary color */
  --background: 0 0% 100%;        /* Background color */
  --foreground: 222.2 84% 4.9%;   /* Text color */
  /* ... more variables */
}
```

### Dark Mode

Dark mode is configured and ready to use. Add the `dark` class to the `<html>` element:

```astro
<html lang="en" class="dark">
```

Or implement a theme switcher component.

## 🛠️ Utility Functions

### `cn()` Helper

Use the `cn()` helper to merge Tailwind classes:

```tsx
import { cn } from "@/lib/utils"

<Button className={cn("my-custom-class", someCondition && "conditional-class")}>
  Button
</Button>
```

## 📝 Component Example: Button

```tsx
import { Button } from "@/components/ui/button"

// Default button
<Button>Click me</Button>

// Variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>

// With onClick
<Button onClick={() => console.log('Clicked!')}>
  Click Me
</Button>
```

## 🔧 Configuration Files

### `components.json`

Defines shadcn/ui configuration:
- Style: "new-york"
- Path aliases
- Component directories

### `tsconfig.json`

Path aliases configured:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### `tailwind.config.mjs`

Extended with shadcn's theme system:
- CSS variables for colors
- Custom animations
- Dark mode support

### `astro.config.mjs`

Configured with:
- React integration
- Tailwind (with `applyBaseStyles: false`)

## 🎯 Best Practices

1. **Use `client:` directives wisely** - Only load React when needed for interactivity
2. **Prefer Astro components** - Use React only when you need reactivity
3. **Leverage Islands Architecture** - Mix Astro and React components
4. **Theme with CSS variables** - Don't hardcode colors
5. **Use the `cn()` utility** - For clean conditional classes

## 🌟 Examples in This Project

Check out `src/pages/index.astro:57-69` for a live example of shadcn buttons!

The homepage includes:
- Button variants demo
- Interactive components
- Proper client-side hydration

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Astro React Integration](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🔥 Quick Tips

### Adding Interactive Forms

```bash
npx shadcn@latest add form input label
```

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

### Adding Dialogs/Modals

```bash
npx shadcn@latest add dialog
```

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

Happy building with shadcn/ui! 🎉
