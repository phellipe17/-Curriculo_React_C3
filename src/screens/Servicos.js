import styled from "styled-components";
import Page from "../components/Page";
import { breakPoints, font, size } from "../helpers/Constants";

export default function Servicos() {
    return (
        <Page>
            <Title>Objetivos</Title>
            <SubTittle>
                Em busca de oportuniadade na área de técnologia para poder
                contribuir para a empresa com meu conhecimento, e poder aprender
                novas tecnoligas para ficar sempre por dentro das novidades e
                criando projetos cada vez mais eficazes.
            </SubTittle>
            <Title>Conhecimentos</Title>
            <SubTittle>
                Conhecimento intermediário em orientação em objetos em java e
                python
            </SubTittle>
            <SubTittle>
                Conhecimento em desenvolvimento mobile em Flutter
            </SubTittle>
            <SubTittle>Conhecimento em Bash</SubTittle>
            <SubTittle>Conhecimento em Linux</SubTittle>
            <SubTittle>Conhecimento em manuntenção de SMARTPHONES</SubTittle>
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
    margin: 0;
    width: 90%;
    font-size: ${size.size1};
    @media ${breakPoints.tablet} {
        font-size: ${size.size2};
        width: 70%;
    }
`;
