import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import styled from 'styled-components';
import Store from '@app/store';

import IndexPage from './pages';

const store = Store.create();

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
