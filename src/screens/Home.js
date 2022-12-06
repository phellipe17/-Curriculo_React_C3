import styled from "styled-components";
import Page from "../components/Page";
import { breakPoints, font, size } from "../helpers/Constants";

export default function Home() {
    return (
        <Page>
            <Title>Formação</Title>
            <SubTittle>2015 - Engenharia Civil na Multivix</SubTittle>
            <SubTittle>
                2017 - Pós Graduação em Estrutura de Concreto e Fundações na
                Inbec
            </SubTittle>
            <SubTittle>
                Cursando - Tecnólogo em Análise e Desenvolvimento de Sistemas na
                Faesa
            </SubTittle>
            <Title>Experiências Profissionais</Title>
            <SubTittle bold>Liberty Mountain Resort</SubTittle>
            <SubTittle>
                Trabalhava nos telefericos como operador de lift ajudando as
                pessoas que tivessem alguns problemas ou dúvidas referentes a
                subir e descer da montanha. Na cidade de Harrisburg, estado da
                pensilvânia , EUA.
            </SubTittle>
            <SubTittle bold>Lorenge</SubTittle>
            <SubTittle>
                Trabalhei como estagiário na empresa Lorenge de construção
                civil, aprendendo como funciona a obra no campo, organização ,
                cumprimento de prazos e responsabilidades de um engenheiro civil
            </SubTittle>
            <SubTittle bold>Motora Techonologies</SubTittle>
            <SubTittle>
                Auxilio em Relatórios das frotas de caminhões, manutenções de
                software do equipamento, criação de script para testes de
                equipamento e desenvolvimento de aplicativo para auxilio dos
                serviços de armazenamento de estoque.
            </SubTittle>
        </Page>
    );
}

const Title = styled.p`
    font-family: ${font};
    margin: 0;
    font-weight: bold;
    font-size: ${size.size2};
    @media ${breakPoints.tablet} {
        font-size: ${size.size4};
    }
`;
const SubTittle = styled.p`
    padding: 0.5rem;
    font-family: ${font};
    font-weight: ${(props) => props.bold && "bold"};
    margin: 0;
    width: 90%;
    font-size: ${size.size1};
    @media ${breakPoints.tablet} {
        font-size: ${size.size2};
        width: 70%;
    }
`;
