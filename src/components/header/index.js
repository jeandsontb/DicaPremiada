import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.header`
    background-color: ${({theme}) => theme.colors.yellowrelative};     
`;

const ContainerPrimary = styled.div`
    width: 100vw;
    height: 110px;
    padding-top: 14px;

    .boxImage {
        width: 86%;
        margin-left: 7%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxImage img {        
        border-radius: 5px;
    }
`;

const ContainerSecondary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 0;
    height: 50px;
    background-color: ${({theme}) => theme.colors.yellowclear};
    box-shadow: 0px 10px 10px ${({theme}) => theme.colors.yellowclear};

    ul {
        display: flex;
        list-style: none;

    }

    li {
        margin: 5px 20px;
        font-size: 20px;
        font-weight: 700;        
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.greystrong};
        cursor: pointer;
        transition: all ease 0.2s;

        :hover {
            color: ${({theme}) => theme.colors.greyrelative};
        }
    }

`;

const Header = () => {
    return (
        <Container>
            <ContainerPrimary>
                <div className="boxImage">
                    <Link href="/"><a><img src="/logo.png" alt="Dica Premiada" /></a></Link>
                </div>
            </ContainerPrimary>
            <ContainerSecondary>
                <nav>
                    <ul>
                        <li><Link href="/about"><a>Sobre</a></Link></li>
                        <li><Link href="/contact"><a>Contato</a></Link></li>
                    </ul>
                </nav>
            </ContainerSecondary>
        </Container>
    )
}

export default Header;