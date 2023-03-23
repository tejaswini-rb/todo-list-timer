import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    font-size: 40px;
`
const Title = styled.h1`
    font-size: 30px;
`
const Block = ({param, number}) => {
    return (
        <div align='center'>
            <Text>{number}</Text>
            <Title>{param}</Title>
        </div>
    )
}

export default Block