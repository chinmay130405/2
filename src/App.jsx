import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.css';

// Simple Theme Context
const ThemeContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for theme
const useTheme = () => {
  return useContext(ThemeContext);
};

// Custom hook for counter
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
};

// Component showing useEffect examples
const EffectExample = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  
  // useEffect - runs after every render
  useEffect(() => {
    document.title = `Count: ${count}`;
  });
  
  // useEffect with dependency array - runs only when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);
  
  // useEffect with cleanup - timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="card">
      <h2>useEffect Examples</h2>
      <p>Count: {count}</p>
      <p>Time: {time.toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Check console and document title!</p>
    </div>
  );
};

// Component showing custom hooks
const CustomHookExample = () => {
  const { count, increment, decrement, reset } = useCounter(5);
  
  return (
    <div className="card">
      <h2>Custom Hook: useCounter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

// Component showing useContext
const ThemeExample = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className="card">
      <h2>useContext Example</h2>
      <p>Current theme: {isDark ? 'Dark' : 'Light'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Main App Component
const AppContent = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <header>
        <h1>React Hooks Demo</h1>
        <p>Simple examples of useEffect, useContext, and Custom Hooks</p>
      </header>
      
      <main>
        <EffectExample />
        <CustomHookExample />
        <ThemeExample />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
