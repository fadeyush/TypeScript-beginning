import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../types/types';
import axios from 'axios';

type UserItemPageParams = {
    id: string;
};

const UserItemPage: FC = () => {
    const pageNumber = useParams<UserItemPageParams>();
    const [user, setUser] = useState<IUser | null>(null);
    
    useEffect(() => {
        fetchUser();
      }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${pageNumber.id}`);
            setUser(response.data);
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            <h1>Страница пользователя {user?.name}</h1>
            <p>email пользователя: {user?.email}</p>
            <p>адрес пользователя: {user?.address.city} {user?.address.street}</p>
        </div>
    );
};

export default UserItemPage;