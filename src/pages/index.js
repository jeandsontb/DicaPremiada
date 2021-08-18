import React from 'react'
import Link from 'next/link';
import useSWR from 'swr';

import styled from 'styled-components';
import PageTitle from '../components/pageTitle';

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


const fetcher = (...args) => fetch(...args)
    .then(res => res.json());


const Home = () => {

    const { data, error} = useSWR('/api/get-promo', fetcher);
    
    

  return (
      <Container> 
        <PageTitle title="Seja bem vindo" />
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

        {!data &&
            <BoxDetail>
                Carregando...
            </BoxDetail>
        }

        {data && data.showCoupon &&
            <BoxDetail>
                {data.message}
            </BoxDetail>
        }

          
      </Container>
  )
}

export default Home;