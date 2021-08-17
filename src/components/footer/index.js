import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 65px;
    padding: 15px 0;
    background-color: ${({theme}) => theme.colors.yellowstrong};

    strong {
        color: ${({theme}) => theme.colors.greystrong};        
    }

    p {
        font-size: 16px;
        color: ${({theme}) => theme.colors.greystrong};

        a {
            text-decoration: none;
            color: ${({theme}) => theme.colors.greystrong};
            transition: all ease 0.2s;

            :hover {
                text-decoration: underline;
            }
        }
    }
`;


const Footer = () => {
    return (
        <Container>
            <div>
                <strong>Sua opinião é muito importante</strong>
                <p>Projeto desenvolvido por: 
                    <a href="https://www.linkedin.com/in/jeandson/"> Jeandson /</a>
                    <a href="https://github.com/jeandsontb"> GitHub</a>

                </p>
            </div>
        </Container>
    );  
}

export default Footer;