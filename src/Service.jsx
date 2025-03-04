import { Suspense, lazy, useState } from 'react';
import './App.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App.jsx'
import NotFound from './components/NotFound.jsx';
import LoginSignup from './components/LoginSignup';
import RefreshHandler from './components/RefreshHandler.jsx';
import UserProfilePage from './components/UserProfilePage.jsx';
import UserHome from './components/UserHome.jsx';
import RequestPage from './components/RequestPage.jsx';
import AnimatedLoader from './components/AnimatedLoader';
import { AppProvider } from './contextAPI/AppContext.jsx'
import ChatInterface from './components/ChatInterface.jsx';

const UserEdit = lazy(() => import('./components/UserEdit.jsx'));
const UserTeam = lazy(() => import('./components/UserTeam.jsx'));

const GClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Service() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const GoogleWrapper = ()=>(
		<GoogleOAuthProvider clientId={GClientID}>
			<LoginSignup />	
		</GoogleOAuthProvider>
	)
	const PrivateRoute = ({ element }) => {
		if(isAuthenticated || JSON.parse(localStorage.getItem("user-info"))?.token) return element;
		return <Navigate to="/Auth"/>
	}

	return (
		<AppProvider>
			<BrowserRouter>
				<RefreshHandler setIsAuthenticated={setIsAuthenticated} />
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/Auth" element={<GoogleWrapper />} />
					<Route path="/User" element={<PrivateRoute element={<UserProfilePage />}/>}>
						<Route path="" element={<Suspense fallback={<AnimatedLoader/>}><UserHome /></Suspense>} /> 
						<Route path="edit" element={<Suspense fallback={<AnimatedLoader/>}><UserEdit /></Suspense>} />
						<Route path="team" element={<Suspense fallback={<AnimatedLoader/>}><UserTeam /></Suspense>} /> 
						<Route path="request" element={<Suspense fallback={<AnimatedLoader/>}><RequestPage /></Suspense>} /> 
					</Route>
					<Route path="/Chat" element={<PrivateRoute element={<ChatInterface />} /> }/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
}

export default Service;
