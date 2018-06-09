import React, { Component } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

class App extends Component {
  render() {
    return (
      <Container>
        <Text>Hello</Text>
      </Container>
    )
  }
}

export default App;
