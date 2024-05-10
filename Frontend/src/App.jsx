import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const inputStyle = {
    margin: '5px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '8px 12px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    background: '#007bff',
    color: '#fff',
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('/register', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      setToken(response.data.token);
      setMessage('');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      setToken('');
      setMessage('Logged out successfully');
    } catch (error) {
      setMessage('Error logging out');
    }
  };

  const handleProtectedRoute = async () => {
    try {
      const response = await axios.get('/dashboard', { headers: { Authorization: token } });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <center>
    <div style={{ textAlign: 'center', marginTop: '50px',}}>
      <h1>User Authentication</h1>
      <div>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        <br />
        <button onClick={handleRegister} style={buttonStyle}>Register</button>
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
        <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        <button onClick={handleProtectedRoute} style={buttonStyle}>Protected Route</button>
      </div>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{message}</p>
    </div>
    </center>
  );
};

export default App;
