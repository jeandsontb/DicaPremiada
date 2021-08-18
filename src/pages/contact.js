import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/pageTitle';

const Container = styled.section`
    min-height: calc(100vh - 225px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    width: 80%;
    margin-left: 10%;

    h1 {
        font-size: 20px;
        color: ${({theme}) => theme.colors.greystrong};
        text-align: center;
    }

    h2 {
        margin-top: 40px;
        font-size: 18px;
        color: ${({theme}) => theme.colors.greystrong};
        text-align: center;
    }
`;

const Contact = () => {
    return (
        <Container>
            <PageTitle title="Contato" />
            <h1>Jeandson Tenorio</h1>

            <h2>
                (87) 9.9924-3529
            </h2>
        </Container>
    )
}

export default Contact;