import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const result = JSON.parse(data);

        if (result?.token) {
            try {
                const decoded = jwtDecode(result.token); 
                if (decoded.exp * 1000 < Date.now()) {
                    localStorage.removeItem('user-info');
                    setIsAuthenticated(false);
                    navigate('/Auth', { replace: true });
                    return;
                }

                setIsAuthenticated(true);
                if (location.pathname === '/Auth') {
                    if (!result?.isCompleted)
                        navigate('/User', { replace: false });
                    else  
                        navigate('/User/edit');
                }
            } catch (error) {
                localStorage.removeItem('user-info');
                setIsAuthenticated(false);
                navigate('/Auth', { replace: true });
            }
        } else {
            setIsAuthenticated(false);
            localStorage.removeItem('user-info');
        }
    }, [location, navigate, setIsAuthenticated]);

    return null;
}

export default RefreshHandler;
