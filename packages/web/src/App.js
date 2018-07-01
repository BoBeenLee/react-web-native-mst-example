import React, { Component } from 'react';
import Store from '@app/store';
import styled from 'styled-components';

import { TodoListWeb } from '@app/view';

const Container = styled.div`

`;

const store = Store.create({});

const todos = [{
    name: "111"
}, {
    name: "123"
}, {
    name: "432"
}]


class App extends Component {
    render() {
        return (
            <Container>
                Hello World
                {store.name}
            </Container>
        );
    }
}

export default App;
