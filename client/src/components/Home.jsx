import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the App</h1>
      <Link to="/register"><button style={{ margin: '10px' }}>Register</button></Link>
      <Link to="/login"><button>Login</button></Link>
    </div>
  );
}

export default Home;
