import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import TodoApp from './TodoApp.jsx'
import Quotegenerator from './Quotegenerator.jsx'

createRoot(document.getElementById("root")).render(
    <Quotegenerator />
);
