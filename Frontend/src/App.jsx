import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './Dashboard'; 

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');

    if (name && email) {
      setUser({ name, email });
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return (
    <div className="antialiased">
      {!user ? (
        <Login />
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;
