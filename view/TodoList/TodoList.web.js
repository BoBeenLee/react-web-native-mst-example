import React from 'react';
import styled from 'styled-components';
import Todo from '../Todo/Todo.web';

const Container = styled.ul``;

const Item = styled.li``;

const TodoList = ({ todos }) => {
    return (
        <Container>
            {todos.map(todo => {
                return (<Item><Todo {...todo} /></Item>);
            })}
        </Container>
    );
};

export default TodoList;
