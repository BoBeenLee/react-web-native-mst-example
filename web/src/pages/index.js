import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from '@app/view/TodoList/TodoList.web';

const Container = styled.div``;

const todos = [{ name: 'hello', done: true }, { name: 'world', done: false }];

class Index extends Component {
    render() {
        return (
            <Container>
                <TodoList todos={todos} />
                <button>Hello</button>
            </Container>
        );
    }
}

export default Index;
