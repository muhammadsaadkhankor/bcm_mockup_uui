import React, { useState } from 'react';
import authService from '../services/auth';

const AuthForm = ({ onLogin, initialMode }) => {
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [signInMethod, setSignInMethod] = useState('email'); // 'email' or 'phone'

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      if (!formData.name.trim()) {
        setError('Name is required');
        return;
      }
      const result = authService.createAccount(formData.email, formData.password, formData.name);
      if (result.success) {
        onLogin(result.user);
      } else {
        setError(result.error);
      }
    } else {
      const result = authService.signIn(formData.email, formData.password);
      if (result.success) {
        onLogin(result.user);
      } else {
        setError(result.error);
      }
    }
  };

  return (
    <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>
        {isSignUp ? 'Create Account' : 'Sign In'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div style={{ marginBottom: '16px' }}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '16px'
              }}
              required
            />
          </div>
        )}
        
        <div style={{ marginBottom: '16px' }}>
          <input
            type="text"
            placeholder={isSignUp ? "Email or Phone Number" : "Email or Phone Number"}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            required
          />
        </div>

        {error && (
          <div style={{ 
            color: '#f44336', 
            fontSize: '14px', 
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <button 
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginBottom: '16px' }}
        >
          {isSignUp ? 'Create Account' : 'Sign In'}
        </button>
      </form>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        margin: '16px 0',
        color: '#666',
        fontSize: '14px'
      }}>
        <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
        <span style={{ padding: '0 16px' }}>or</span>
        <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
      </div>
      
      <button
        onClick={() => {
          // Simulate Google sign-in
          const googleUser = {
            id: Date.now(),
            name: 'Google User',
            email: 'user@gmail.com',
            isGoogleUser: true
          };
          onLogin(googleUser);
        }}
        style={{
          width: '100%',
          padding: '12px',
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          background: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '16px'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError('');
            setFormData({ email: '', password: '', name: '' });
            setIsSignUp(!isSignUp);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#4CAF50',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Create one"}
        </button>
      </div>

      <div style={{ 
        marginTop: '24px', 
        padding: '12px', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
        <strong>Demo Account:</strong><br />
        Email: demo@bcm.com<br />
        Phone: +1234567890<br />
        Password: demo123
      </div>
    </div>
  );
};

export default AuthForm;