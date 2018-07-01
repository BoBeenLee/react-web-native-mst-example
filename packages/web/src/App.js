import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import styled from 'styled-components';
import Store from 'stores';

import IndexPage from './pages';

const store = Store.create({
    name: "Hello"
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <IndexPage />
            </Provider>
        )
    }
}

export default App;
