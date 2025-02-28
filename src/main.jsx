import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound.jsx';
import LoginSignup from './components/LoginSignup';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Auth" element={<LoginSignup />} />
        <Route path="/User"/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
)
