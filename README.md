# React Hooks Demo

Simple demonstration of React Hooks including useEffect, useContext, and Custom Hooks.

## What are React Hooks?

React Hooks are special functions that let you "hook into" React features in functional components. They make it easier to reuse logic and manage state without writing class components.

---

## 🎯 Understanding Each Hook

### 1. **useState Hook** - Managing State

**What is it?**
- `useState` lets you add state to functional components
- State is data that can change over time
- When state changes, the component re-renders with new data

**Simple Explanation:**
Think of `useState` like a variable that React watches. When you change it, React automatically updates the display.

**Example in this app:**
```javascript
const [count, setCount] = useState(0);
// count = current value
// setCount = function to change the value
// 0 = starting value
```

**How to use:**
- Use `count` to display the value
- Use `setCount(newValue)` to change it
- Component automatically updates when value changes

---

### 2. **useEffect Hook** - Side Effects

**What is it?**
- `useEffect` lets you do things after a component renders
- Side effects are things like API calls, timers, or updating the document title
- It runs at specific times during component's life

**Simple Explanation:**
`useEffect` is like saying "After the component appears on screen, do this..."

**Three Different Patterns:**

#### Pattern 1: Run after every render (no dependency array)
```javascript
useEffect(() => {
  console.log('Component updated!');
});
```
- Runs every time component re-renders
- Usually NOT what you want

#### Pattern 2: Run only once (empty dependency array)
```javascript
useEffect(() => {
  console.log('Component just appeared!');
}, []);
```
- Runs only when component first appears
- Good for loading initial data

#### Pattern 3: Run when specific values change (with dependencies)
```javascript
useEffect(() => {
  console.log('Count changed to:', count);
}, [count]);
```
- Runs when `count` changes
- Ignores other changes

#### Pattern 4: Cleanup (return a function)
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick!');
  }, 1000);
  
  return () => clearInterval(timer); // Cleanup
}, []);
```
- The return function cleans up (stops the timer)
- Prevents memory leaks
- Runs before component disappears

**In This App:**
- Updates document title every render
- Logs to console when count changes
- Sets up a timer that updates time every second

---

### 3. **useContext Hook** - Sharing Data

**What is it?**
- `useContext` lets you share data between components without passing props down multiple levels
- Solves the "prop drilling" problem

**Simple Explanation:**
Imagine a family where grandparents want to give a gift to their grandchildren. Instead of passing it through parents (prop drilling), `useContext` lets them give it directly.

**Problem it solves (Prop Drilling):**
```javascript
// Without useContext - passing theme through every level
<Grandparent theme="dark">
  <Parent theme="dark">
    <Child theme="dark">
      <GrandChild theme="dark" /> // boring!
    </Child>
  </Parent>
</Grandparent>
```

**Solution with useContext:**
```javascript
// With useContext - theme available directly
<ThemeProvider>
  <GrandChild /> // can use theme without props!
</ThemeProvider>
```

**How it works:**
1. Create a Context: `createContext()`
2. Create a Provider: Wraps components that need the data
3. Use useContext: Access the data in child components

**In This App:**
- Creates a `ThemeContext` for light/dark mode
- `ThemeProvider` wraps the entire app
- Components can access theme without passing props
- Toggle button switches between light and dark

---

### 4. **Custom Hooks** - Reusable Logic

**What is it?**
- Custom hooks are JavaScript functions that use other hooks
- They extract and reuse component logic
- Let you create your own hooks!

**Simple Explanation:**
Custom hooks are like recipes. You combine multiple ingredients (other hooks) to make a new, reusable recipe.

**Rules:**
- Must start with "use" (like `useCounter`, `useCustom`)
- Can use other hooks inside
- Regular JavaScript function

**In This App - useCounter:**
```javascript
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
};
```

**Why use it?**
- Don't repeat counter logic in every component
- Use `useCounter` anywhere you need a counter
- Easy to maintain and test

---

## 📚 React Hooks Summary Table

| Hook | Purpose | When to Use |
|------|---------|-----------|
| **useState** | Add state to components | Track changing data |
| **useEffect** | Run code after render | API calls, timers, subscriptions |
| **useContext** | Share data between components | Theme, user info, settings |
| **useCallback** | Memoize functions | Performance optimization |
| **useRef** | Store values that don't cause re-render | Timer IDs, DOM elements |
| **useReducer** | Complex state management | Multiple state values |
| **Custom Hooks** | Reuse logic | Extract common patterns |

---

## 🔄 Component Lifecycle with Hooks

**Before Render:** Component code runs
```javascript
const [count, setCount] = useState(0);
```

**After Render:** useEffect runs
```javascript
useEffect(() => {
  // This runs after component appears
  document.title = `Count: ${count}`;
}, [count]);
```

**When Component Disappears:** Cleanup runs
```javascript
useEffect(() => {
  const timer = setInterval(...);
  return () => clearInterval(timer); // Cleanup
}, []);
```

---

## 🎮 What's in This Demo?

### useEffect Example Component
- **Title Update**: Changes document title when count changes
- **Time Display**: Shows current time that updates every second
- **Timer**: Demonstrates useEffect with cleanup

### useCounter Custom Hook
- **State Management**: Tracks a number
- **Functions**: increment, decrement, reset
- **Reusable**: Can use in any component

### Theme Example (useContext)
- **Theme Provider**: Wraps the app
- **Theme Toggle**: Switch between light and dark
- **Auto-applied**: All components use the theme automatically

---

## 💡 Common Mistakes to Avoid

❌ **Don't:**
```javascript
useEffect(() => {
  setState(newValue); // Infinite loop!
}); // No dependency array
```

✅ **Do:**
```javascript
useEffect(() => {
  setState(newValue);
}, [dependency]); // Add dependency array
```

---

❌ **Don't:**
```javascript
useEffect(() => {
  const timer = setInterval(...);
  // Forgot cleanup! Memory leak!
}, []);
```

✅ **Do:**
```javascript
useEffect(() => {
  const timer = setInterval(...);
  return () => clearInterval(timer); // Cleanup
}, []);
```

---

## 🚀 How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

4. **Explore:**
   - Click buttons to see state changes
   - Toggle theme to see useContext
   - Open browser console (F12) to see useEffect logs
   - Watch document title change

---

## 📝 Try It Yourself

**Exercise 1 - useState:**
- Modify the counter to increase by 2 instead of 1
- Add a multiply button

**Exercise 2 - useEffect:**
- Change the timer to update every 500ms instead of 1000ms
- Add a button to pause the timer

**Exercise 3 - useContext:**
- Add more theme options (not just light/dark)
- Change which elements respond to theme

**Exercise 4 - Custom Hooks:**
- Create a `useTimer` hook
- Create a `useToggle` hook for boolean states

---

## 📖 Key Takeaways

✨ **useState** = Add data that can change
✨ **useEffect** = Do something after render
✨ **useContext** = Share data across components
✨ **Custom Hooks** = Extract and reuse logic

**Remember:** Hooks make functional components powerful and can do everything class components can do!

---

## 🔗 Learn More

- [React Official Hooks Docs](https://react.dev/reference/react)
- [Hooks Rules](https://react.dev/warnings/invalid-hook-call-warning)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
