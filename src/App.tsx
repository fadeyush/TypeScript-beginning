import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
    console.log(response)
    setUsers(response.data);
  }

  return (
    <div>
      <Card onClick={(num: number) => console.log(`click ${num}`)} variant={CardVariant.outlined} width='200px' height='200px'>
        <button>Кнопка</button>
      </Card>
      <UserList users={users}></UserList>
    </div>
  );
};

export default App;
