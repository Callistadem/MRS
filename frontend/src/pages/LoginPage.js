import React, { useState } from 'react';
import './LoginPage.css';
import Header from '../components/Header';
import useAuthContext from '../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login, errors } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({email, password});
    setMessage(errors);
  };

  return (
    <div class="page">
    <Header />
      <div class="login-page">
        <div id="logform1">
          <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label class="labuno">Email:</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id ="inuno"
                  />
            </div>
            <div>
              <label class="labuno">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="indue"
              />
            </div>
          <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <button id="subutton" type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  </div>
</div>
  );
}

export default LoginPage;
