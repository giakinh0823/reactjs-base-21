import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        
    },
}))

TodoList.propTypes = {
    todosList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todosList: [],
    onTodoClick: null,
}

function TodoList(props) {
    const classes = useStyles();

    const { todoList, onTodoClick } = props;

    const handlerTodoClick = (todo, id) => {
        if(!onTodoClick) return ;
        onTodoClick(todo, id);
    }

    return (
        <div className={classes.root}>
            <ul className="todo-list">
                {todoList.map((todo,index) => (
                    <li className={classnames({ 
                        'todo-item':true,
                        completed: todo.status === 'completed' 
                    })} 
                    key={todo.id}
                    onClick={() => handlerTodoClick(todo, todo.id)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;