import React from 'react'
import Link from 'next/link';

import styled from 'styled-components';

const Container = styled.section`
    min-height: calc(100vh - 225px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;

    p {
        font-size: 16px;
        color: ${({theme}) => theme.colors.greystrong};
        text-align: center;
    }
`;

const ButtonSearch = styled.a`
    background-color: ${({theme}) => theme.colors.yellowstrong};
    color: ${({theme}) => theme.colors.whiteStrong};
    font-size: 20px;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 60px;
    cursor: pointer;
    font-weight: 700;
    transition: all ease 0.2s;
    box-shadow: 0px 0px 6px ${({theme}) => theme.colors.greyrelative};

    :hover {
        background-color: ${({theme}) => theme.colors.yellowrelative};
    }
`;

const BoxDetail = styled.div`
    color: ${({theme}) => theme.colors.greystrong};
    font-size: 14px;
    text-align: center;
    margin-top: 50px;
`;

const Home = () => {
  return (
      <Container> 

        <p>
            A melhor maneira de podermos melhorar ainda mais nossos serviços, é você 
            falar como foi sua experiência em nosso estabelecimento. <br /> A sua opinião é muito 
            importante para nós.
        </p>       

        <Link href="/search">
            <ButtonSearch>
                Dar a sua opinião
            </ButtonSearch>
        </Link>

        <BoxDetail>
            Messagem do código
        </BoxDetail>

          
      </Container>
  )
}

export default Home;