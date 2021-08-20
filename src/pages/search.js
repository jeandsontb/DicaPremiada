import React, {useState} from 'react';
import styled from 'styled-components';
import PageTitle from '../components/pageTitle';

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

    .inputText {
        width: 300px;
        height: 40px;
        border: none;
        outline: none;
        background-color: ${({theme}) => theme.colors.yellowclear};
        border-radius: 5px;
        box-shadow: 2px 2px 3px ${({theme}) => theme.colors.greyrelative};
        padding: 0 10px;
        margin-bottom: 10px;
    }

    .boxCheck {
        display: flex;
        flex-direction: row !important;
        width: 300px;
        margin-top: 20px;
    }

    .labelCheck {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 14px;
    }
`;

const ButtonSave = styled.button`
    background-color: ${({theme}) => theme.colors.yellowstrong};
    color: ${({theme}) => theme.colors.whiteStrong};
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
    cursor: pointer;
    font-weight: 700;
    border: none;
    transition: all ease 0.2s;
    box-shadow: 0px 0px 6px ${({theme}) => theme.colors.greyrelative};

    :hover {
        background-color: ${({theme}) => theme.colors.yellowrelative};
    }
`;

const BoxSucess = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0px;
    max-width: 300px;

    p {
        background-color: ${({theme}) => theme.colors.yellowclear};
        padding: 30px;
        border-top: 5px solid ${({theme}) => theme.colors.yellowstrong}; 
        border-bottom: 5px solid ${({theme}) => theme.colors.yellowstrong};
        margin-bottom: 10px;
        text-align: center;
        color: ${({theme}) => theme.colors.greystrong};
    }

    div {
        color: ${({theme}) => theme.colors.greystrong};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
    }

    h2 {
        margin-bottom: 20px;
    }

    h3 {
        text-align: center;
        font-size: 14px;
        font-weight: 200;
    }
`;

const Search = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    });
    const [sucess, setSucess] = useState(false);
    const [retorno, setRetorno] = useState({});
    
    const notas = [0, 1, 2, 3, 4, 5];

    const save = async () => {
        if(form.Nome && form.Email && form.Whatsapp && form.Nota) {
            try {
                const response = await fetch('/api/save', {
                    method: 'POST',
                    body: JSON.stringify(form)
                })
        
                const data = await response.json();
                setSucess(true);
                setRetorno(data);
                
            } catch (err) {
    
            }
        } else {
            alert('É necessário preencher o formulário para enviar sua sugestão!')
        }
    }

    const onChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.name;

        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <Container>
            <PageTitle title="Pesquisa" />
            <h1>Críticas e Sugestões</h1>

            <BoxInfo>
            Estamos sempre na busca de melhor atender nossos clientes.<br />
            E a sua opinião faz parte desse processo, você é a evolução do nosso progresso.
            </BoxInfo>

            {!sucess &&
                <BoxForm>
                    <label>Seu Nome:</label>
                    <input className="inputText" type="text"  placeholder="Nome" name="Nome" value={form.Nome} onChange={onChange} />
                    <label>Seu Whatsapp:</label>
                    <input className="inputText" type="text"  placeholder="Whatsapp" name="Email" value={form.Email} onChange={onChange}/>
                    <label>Seu E-mail:</label>
                    <input className="inputText" type="text"  placeholder="Email" name="Whatsapp" value={form.Whatsapp} onChange={onChange}/>

                    <div className="boxCheck">
                        <label>Nota:</label>
                        {notas.map((item) => (
                            <label className="labelCheck" key={item}>
                                {item}
                                <input className="check" key={item} type="radio" name="Nota" value={item} onChange={onChange} />
                            </label>
                        ))}
                    </div>
                    
                    <ButtonSave onClick={save}>Salvar</ButtonSave>
                </BoxForm>
            }

            {sucess &&
                <BoxSucess>
                    <p>Obrigado por contribuir com sua sugestão ou crítica</p>

                    <div>
                        {retorno.showCoupon &&
                            <>
                                <span>--- SEU CUPOM PROMOCIONAL ---</span>
                                <h2>{retorno.Cupom}</h2>

                                <p>
                                    {retorno.Promo}
                                </p>

                                <h3>
                                    Tire o print dessa tela e apresente em nosso estabelecimento
                                    para adquirir o seu desconto.
                                </h3>
                            </>
                        }
                    </div>
                </BoxSucess>
            }
        </Container>
    )
}


export default Search;