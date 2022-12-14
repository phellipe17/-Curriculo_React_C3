import styled from "styled-components";
import Page from "../components/Page";
import { breakPoints, colors, font, size } from "../helpers/Constants";
import {
    FaGithubSquare,
    FaLinkedin,
    FaInstagramSquare,
    FaTwitterSquare,
} from "react-icons/fa";

export default function Contato() {
    return (
        <>
            <Page>
                <Title>Contato</Title>
                <SubTittle bold>Telefone</SubTittle>
                <SubTittle>27 999428625</SubTittle>
                <SubTittle bold>Email</SubTittle>
                <SubTittle>phellipess_17@hotmail.com</SubTittle>
                <IconContainer>
                    <Nav href="https://github.com/phellipe17">
                        <Github />
                    </Nav>

                    <Nav href="https://www.linkedin.com/in/phellipe-santos-sarmento-698692119/">
                        <Linkedin />
                    </Nav>
                    <Nav href="https://twitter.com/Phellipe1706">
                        <Twitter />
                    </Nav>

                    <Nav href="https://www.instagram.com/phellipe17/">
                        <Instagram />
                    </Nav>
                </IconContainer>
            </Page>
        </>
    );
}

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    @media ${breakPoints.tablet} {
        width: 70%;
    }
`;
const Nav = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${colors.black};
`;

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
    font-weight: ${(props) => props.bold && "bold"};
    width: 90%;
    font-size: ${size.size1};
    @media ${breakPoints.tablet} {
        font-size: ${size.size2};
        width: 70%;
    }
`;
const Github = styled(FaGithubSquare)`
    color: ${colors.black};
    font-size: ${size.size3};
    width: ${size.size3};
`;

const Twitter = styled(FaTwitterSquare)`
    color: ${colors.black};
    font-size: ${size.size3};
    width: ${size.size3};
`;
const Linkedin = styled(FaLinkedin)`
    color: ${colors.black};
    font-size: ${size.size3};
`;

const Instagram = styled(FaInstagramSquare)`
    color: ${colors.black};
    font-size: ${size.size3};
`;
