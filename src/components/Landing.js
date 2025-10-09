import React, { useState } from 'react';
import AuthForm from './AuthForm';

const Landing = ({ onLogin, onNavigate }) => {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '20px'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <img src="/bcm.png" alt="BCM Logo" style={{ height: '80px', width: 'auto' }} />
              <h1 style={{ 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#4CAF50', 
                margin: '0'
              }}>
                BCM
              </h1>
            </div>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Smart Visual Calorie Tracker
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowAuth(false)}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                background: 'white',
                border: '2px solid #e0e0e0',
                fontSize: '18px',
                color: '#666',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              ×
            </button>
            <AuthForm onLogin={onLogin} initialMode={showAuth} />
          </div>

        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <img src="/bcm.png" alt="BCM Logo" style={{ height: '160px', width: 'auto' }} />
              <h1 style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#4CAF50', 
                margin: '0',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                BCM
              </h1>
            </div>
            <p style={{ 
              fontSize: '24px', 
              color: '#666', 
              fontWeight: '300',
              lineHeight: '1.4'
            }}>
              Smart Visual Calorie Tracker
            </p>
            <p style={{ 
              fontSize: '16px', 
              color: '#888', 
              marginTop: '16px',
              maxWidth: '400px',
              margin: '16px auto 0'
            }}>
              Take photos of your meals and let AI analyze calories and nutrients automatically
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            alignItems: 'center'
          }}>
            <button 
              className="btn btn-primary"
              onClick={() => setShowAuth('signin')}
              style={{ width: '200px' }}
            >
              Sign In
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => setShowAuth('signup')}
              style={{ width: '200px' }}
            >
              Create Account
            </button>
            <button 
              className="btn"
              onClick={() => onLogin({ name: 'Guest User', email: 'guest@bcm.com', isGuest: true })}
              style={{ 
                width: '200px',
                background: 'transparent',
                color: '#666',
                border: '1px solid #ddd'
              }}
            >
              Continue as Guest
            </button>
          </div>
          
          <div style={{ 
            marginTop: '48px',
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-camera" style={{ fontSize: '32px', color: '#4CAF50', marginBottom: '8px' }}></i>
              <p style={{ fontSize: '14px', color: '#666' }}>Photo Analysis</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-chart-pie" style={{ fontSize: '32px', color: '#FF9800', marginBottom: '8px' }}></i>
              <p style={{ fontSize: '14px', color: '#666' }}>Nutrition Tracking</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-target" style={{ fontSize: '32px', color: '#4CAF50', marginBottom: '8px' }}></i>
              <p style={{ fontSize: '14px', color: '#666' }}>Goal Setting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;