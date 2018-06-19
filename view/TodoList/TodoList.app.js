import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import Todo from '../Todo/Todo.app';

const Container = styled.View``;

const TodoList = ({ todos }) => {
    return (
        <Container>
            <FlatList
                data={todos}
                renderItem={({ todo }) => <Todo {...todo} />}
            />
        </Container>
    );
};

export default TodoList;
