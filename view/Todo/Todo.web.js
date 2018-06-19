import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #eee;
`;

const Name = styled.span`
    font-size: 15px;
    font-weight: bold;
`;

const Done = styled.span`
`;

const Todo = ({ name = "name", done = false }) => {
    return (
        <Container>
            <Name>{name}</Name>
            <Done>{done ? 'Done' : 'Not yet'}</Done>
        </Container>
    );
};

export default Todo;
