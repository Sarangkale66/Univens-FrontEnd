import { Suspense, lazy, useState } from 'react';
import './App.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import App from './App.jsx'
import NotFound from './components/NotFound.jsx';
import LoginSignup from './components/LoginSignup';
import RefreshHandler from './components/RefreshHandler.jsx';
import UserProfilePage from './components/UserProfilePage.jsx';
import UserHome from './components/UserHome.jsx';
import RequestPage from './components/RequestPage.jsx';
import AnimatedLoader from './components/AnimatedLoader';

const UserEdit = lazy(() => import('./components/UserEdit.jsx'));
const UserTeam = lazy(() => import('./components/UserTeam.jsx'));

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
        <Route path="/User" element={<UserProfilePage />}>
					<Route path="" element={<Suspense fallback={<AnimatedLoader/>}><UserHome /></Suspense>} /> 
					<Route path="edit" element={<Suspense fallback={<AnimatedLoader/>}><UserEdit /></Suspense>} />
					<Route path="team" element={<Suspense fallback={<AnimatedLoader/>}><UserTeam /></Suspense>} /> 
					<Route path="request" element={<Suspense fallback={<AnimatedLoader/>}><RequestPage /></Suspense>} /> 
      	</Route>
      {/* <Route path="/Chat" element={<ChatInterface />} /> */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
	);
}

export default Service;
