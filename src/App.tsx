import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './lib/api/users';

function App() {
  const [users, setUsers] = useState<any[]>([])

  const handleGetUsers = async () => {
    try {
      const res = await getUsers()
      console.log(res)

      if (res?.status === 200) {
        setUsers(res.data)
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetUsers()
  }, [])

  console.log(users)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {
            users.map(user => <li key={user.id}> {user.name} </li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
