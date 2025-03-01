import { useState } from 'react';
import './App.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import App from './App.jsx'
import NotFound from './components/NotFound.jsx';
import LoginSignup from './components/LoginSignup';
import UserProfile from './components/UserProfile.jsx';
import RefreshHandler from './components/RefreshHandler.jsx';

const GClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Service() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const GoogleWrapper = ()=>(
		<GoogleOAuthProvider clientId={GClientID}>
			<LoginSignup></LoginSignup>
		</GoogleOAuthProvider>
	)
	const PrivateRoute = ({ element }) => {
		return isAuthenticated ? element : <Navigate to="/Auth" />
	}
	return (
		<BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Auth" element={<GoogleWrapper />} />
        <Route path="/User" element={<PrivateRoute element={<UserProfile/>}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
	);
}

export default Service;
