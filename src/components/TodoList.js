import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem onToggle={onToggle} onRemove={onRemove} todo={todo} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;
