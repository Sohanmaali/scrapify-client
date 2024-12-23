import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../utils/api';

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const response = await api.post('/auth/register', { email, password });
      res.status(200).json(response.data);
    } catch (err) {
      res.status(400).json({ message: 'Registration failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default registerHandler;
