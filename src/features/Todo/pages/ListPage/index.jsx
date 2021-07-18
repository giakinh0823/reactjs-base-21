import { Button, makeStyles } from '@material-ui/core';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

const useStyles = makeStyles((theme) => ({ 
    button: {
        margin: theme.spacing(4, 2),
    },
}))


function ListPage(props) {

    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
        {
            id: 4,
            title: 'Play Game',
            status: 'completed',
        },
    ]

    const classes = useStyles();


    const location = useLocation(); //lấy location hiện tại. location.search = ?status=
    const history = useHistory(); //lấy history để thay đổi location hiện tại. 
    const match = useRouteMatch(); //sử dụng mathc để lấy path name hiện tại
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all')
    }, [location.search]) //khi location hiện tại hay đổi thì mình sẽ thực hiện useEffect


    const handlerTodoClick = (todo, id) => {
        //clone current array to the new array
        const newTodoList = [...todoList]
        //toggle state
        let toggleTodo = null;
        let index = 0;
        for (let i = 0; i < newTodoList.length; i++) {
            if (newTodoList[i].id === id) {
                toggleTodo = newTodoList[i];
                index = i;
                break;
            }
        }
        const newTodo = {
            ...newTodoList[index],
            status: toggleTodo.status === 'new' ? 'completed' : 'new',
        }
        newTodoList[index] = newTodo
        //update todo list
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        const queryParams = { status: 'all' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const handleShowCompletedClick = () => {
        const queryParams = { status: 'completed' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowNewClick = () => {
        const queryParams = { status: 'new' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const renderTodoList = useMemo(() => {
        return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    }, [todoList, filterStatus])


    const handleTodoFormSubmit = (values) => {
        console.log(values)
        const newTodo = {
            id: todoList.length+1,
            title: values.title,
            status: 'new'
        }

        const newTodoList = [...todoList, newTodo]
        setTodoList(newTodoList)
    }

    return (
        <div>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <TodoList todoList={renderTodoList} onTodoClick={handlerTodoClick} />
            <Button className={classes.button} color="primary"  variant="contained" onClick={handleShowAllClick}>Show All</Button>
            <Button className={classes.button} color="primary"  variant="contained" onClick={handleShowCompletedClick}>Show Completed</Button>
            <Button className={classes.button} color="primary"  variant="contained" onClick={handleShowNewClick}>Show New</Button>
        </div>
    );
}

export default ListPage;