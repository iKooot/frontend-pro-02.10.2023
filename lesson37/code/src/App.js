import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, selectTodos } from "./ducks/todo.duck";
import { fetchUsersThunk } from './ducks/users.duck';
import {UserList} from "./components";

export function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  console.log(todos)

  useEffect(() => {
    dispatch(addTodo({id: 1, text: 'hello world'}));
    dispatch(removeTodo({id: 1}));
    const reqPromise = dispatch(fetchUsersThunk());
    console.log(reqPromise)

    return () => {
      reqPromise.abort()
    }
  }, [dispatch]);

  return <div className="App"><UserList/></div>;
}
