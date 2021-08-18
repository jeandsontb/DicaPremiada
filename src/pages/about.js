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

const About = () => {
    return (
        <Container>
            <PageTitle title="Sobre" />
            <h1>Uma forma prática de melhorar o serviço para você</h1>

            <h2>
                Com essa plataforma podemos entender a sua necessidade e o que podemos 
                melhorar para proporcionar um ambiente de qualidade e atendimento diferenciado!

                <br />
                <br />
                <br />
                A sua opinião é fruto para essa melhoria
            </h2>
        </Container>
    )
}

export default About;