import React from 'react';

const Navbar = ({ currentPage, onNavigate, currentUser, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/bcm.png" alt="BCM" style={{ height: '50px', width: 'auto' }} />
            <span>BCM</span>
          </div>
          <ul className="nav-links">
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'upload' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); onNavigate('upload'); }}
              >
                <i className="fas fa-plus"></i>
                <span>Add Meal</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'history' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); onNavigate('history'); }}
              >
                <i className="fas fa-history"></i>
                <span>History</span>
              </a>
            </li>
            <li>
              <button
                onClick={onLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;