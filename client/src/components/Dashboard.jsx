import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/dashboard')
      .then((res) => setData(res.data))
      .catch(() => navigate('/login'));
  }, []);

  return (
    <div>
      <h2>{data.msg}</h2>
      <ul>
        {data.posts?.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <button onClick={() => {
        axios.post('/logout').then(() => navigate('/login'));
      }}>Logout</button>
    </div>
  );
}

export default Dashboard;
