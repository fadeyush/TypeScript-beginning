import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import { IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';

const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
    setUsers(response.data);
  }

  return (
    <div>
      <Card onClick={(num: number) => console.log(`click ${num}`)} variant={CardVariant.outlined} width='200px' height='200px'>
        <button>Кнопка</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}/>
    </div>
  );
};

export default App;
