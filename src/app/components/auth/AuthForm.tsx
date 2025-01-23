import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '@/app/utils/auth';
import api from '@/app/utils/api';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response;
      if (type === 'login') {
        response = await api.post('/api/auth/login', { email, password });
      } else {
        response = await api.post('/api/auth/register', { email, password });
      }

      setToken(response.data.token); // Save the token in cookies
      router.push('/'); // Redirect to the homepage after login/signup
    } catch (err: any) {
        console.error(err);
        
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">{type === 'login' ? 'Login' : 'Sign Up'}</button>
    </form>
  );
};

export default AuthForm;
