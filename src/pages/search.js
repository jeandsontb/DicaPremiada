import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.section`
    min-height: calc(100vh - 225px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;

    h1 {
        color: ${({theme}) => theme.colors.greystrong};
    }
`;

const BoxInfo = styled.div`
    color: ${({theme}) => theme.colors.greystrong};
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
`;

const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    label {
        color: ${({theme}) => theme.colors.greystrong};
        font-size: 18px;
    }

    input {
        width: 300px;
        height: 40px;
        border: none;
        outline: none;
        background-color: ${({theme}) => theme.colors.yellowclear};
        border-radius: 5px;
        box-shadow: 2px 2px 3px ${({theme}) => theme.colors.greyrelative};
        padding: 0 10px;
    }
`;

const Search = () => {
    return (
        <Container>
            <h1>Críticas e Sugestões</h1>

            <BoxInfo>
            Estamos sempre na busca de melhor atender nossos clientes.<br />
            E a sua opinião faz parte desse processo, você é a evolução do nosso progresso.
            </BoxInfo>

            <BoxForm>
                <label>Seu nome:</label>
                <input type="text" />
            </BoxForm>
        </Container>
    )
}


export default Search;