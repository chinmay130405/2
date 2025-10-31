# React Hooks Demo

Simple demonstration of React Hooks including useEffect, useContext, and Custom Hooks.

## Features

- **useEffect Examples**: Shows different useEffect patterns
- **useContext**: Theme switching (Light/Dark mode)
- **Custom Hooks**: useCounter hook for state management

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

## What's Demonstrated

### useEffect Hook
- Effect that runs on every render (updates document title)
- Effect with dependencies (console logging)
- Effect with cleanup (timer)

### useContext Hook
- Theme provider that wraps the entire app
- Theme consumer that uses the context
- Toggle between light and dark themes

### Custom Hooks
- useCounter: Manages counter state with increment, decrement, reset
- Reusable logic that can be shared across components

## File Structure

```
src/
├── App.jsx          # Main component with all examples
├── App.css          # Basic styling
└── main.jsx         # React entry point
```

## Technologies Used

- React 19
- Vite
- CSS3

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
