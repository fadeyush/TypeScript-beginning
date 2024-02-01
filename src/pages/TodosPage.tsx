import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import axios from 'axios';
import List from '../components/List';
import TodoItem from '../components/TodoItem';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
      setTodos(response.data);
    } catch (e) {
      console.log(e)
    }
  }
    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
    );
};

export default TodosPage;