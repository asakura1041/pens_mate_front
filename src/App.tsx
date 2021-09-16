import React, { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './lib/api/users';
import { Default } from './templates/Default'

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
      <Default></Default>
    </div>
  );
}

export default App;
