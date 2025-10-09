import React from 'react';

const Navbar = ({ currentPage, onNavigate, currentUser, onLogout }) => {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(76, 175, 80, 0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            padding: '8px 16px',
            borderRadius: '12px',
            background: 'white',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <img src="/bcm.png" alt="BCM" style={{ height: '40px', width: 'auto' }} />
            <span style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#333',
              textShadow: 'none'
            }}>BCM</span>
          </div>
          
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                background: currentPage === 'dashboard' ? 'linear-gradient(135deg, #4CAF50, #45a049)' : 'transparent',
                color: currentPage === 'dashboard' ? 'white' : '#666',
                boxShadow: currentPage === 'dashboard' ? '0 2px 8px rgba(76, 175, 80, 0.3)' : 'none'
              }}
            >
              <i className="fas fa-home" style={{ fontSize: '16px' }}></i>
              <span className="nav-text">Home</span>
            </a>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('upload'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                background: currentPage === 'upload' ? 'linear-gradient(135deg, #FF9800, #f57c00)' : 'transparent',
                color: currentPage === 'upload' ? 'white' : '#666',
                boxShadow: currentPage === 'upload' ? '0 2px 8px rgba(255, 152, 0, 0.3)' : 'none'
              }}
            >
              <i className="fas fa-plus" style={{ fontSize: '16px' }}></i>
              <span className="nav-text">Add Meal</span>
            </a>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('history'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                background: currentPage === 'history' ? 'linear-gradient(135deg, #2196F3, #1976D2)' : 'transparent',
                color: currentPage === 'history' ? 'white' : '#666',
                boxShadow: currentPage === 'history' ? '0 2px 8px rgba(33, 150, 243, 0.3)' : 'none'
              }}
            >
              <i className="fas fa-history" style={{ fontSize: '16px' }}></i>
              <span className="nav-text">History</span>
            </a>
            
            <div style={{
              width: '1px',
              height: '30px',
              background: 'linear-gradient(to bottom, transparent, #e0e0e0, transparent)',
              margin: '0 8px'
            }}></div>
            
            <button
              onClick={onLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '25px',
                background: 'linear-gradient(135deg, #f44336, #d32f2f)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(244, 67, 54, 0.2)'
              }}
            >
              <i className="fas fa-sign-out-alt" style={{ fontSize: '16px' }}></i>
              <span className="nav-text">Logout</span>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-text {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;