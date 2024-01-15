import React, { useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {

  const users: IUser[] = [{
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    adress: {
      street: "Kulas Light",
      city: "Gwenborough",
      zipcode: "92998-3874"
    }},
    {
      id: 2,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      adress: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874"
      }}]

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
