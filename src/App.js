import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';
import Results from './components/Results';
import History from './components/History';
import Navbar from './components/Navbar';
import authService from './services/auth';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    }
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const login = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const logout = () => {
    authService.signOut();
    setCurrentUser(null);
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onLogin={login} onNavigate={navigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigate} currentUser={currentUser} />;
      case 'upload':
        return <Upload onNavigate={navigate} currentUser={currentUser} />;
      case 'results':
        return <Results onNavigate={navigate} currentUser={currentUser} />;
      case 'history':
        return <History onNavigate={navigate} currentUser={currentUser} />;
      default:
        return <Landing onLogin={login} onNavigate={navigate} />;
    }
  };

  return (
    <div className="app">
      {isLoggedIn && <Navbar currentPage={currentPage} onNavigate={navigate} currentUser={currentUser} onLogout={logout} />}
      {renderPage()}
    </div>
  );
}

export default App;