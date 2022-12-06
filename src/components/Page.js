import styled from "styled-components";
import AvatarImg from "../assets/avatar.jpg";
import Background from "../assets/background.jpg";
import { breakPoints, colors, font, size } from "../helpers/Constants";
import {
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaGithubSquare,
} from "react-icons/fa";
import Footer from "./Footer";

export default function Page(props) {
    const { children } = props;
    return (
        <>
            <Header>
                <IconContainer>
                    <Nav href="https://twitter.com/Phellipe1706">
                        <Twitter />
                    </Nav>
                    <Nav href="https://github.com/phellipe17">
                        <Github />
                    </Nav>

                    <Nav href="https://www.linkedin.com/in/phellipe-santos-sarmento-698692119/">
                        <Linkedin />
                    </Nav>

                    <Nav href="https://www.instagram.com/phellipe17/">
                        <Instagram />
                    </Nav>
                </IconContainer>
                <ProfileContainer>
                    <Avatar image={AvatarImg} />
                    <TextContainer>
                        <Name>
                            Phellipe Santos
                            {window.innerWidth > 400 && " Sarmento"}
                        </Name>
                        <Stack>Full Stack Developer</Stack>
                    </TextContainer>
                </ProfileContainer>
            </Header>
            <NavBar>
                <NavButton href="/">Home</NavButton>
                <NavButton href="/contato">Contato</NavButton>
                <NavButton href="/servicos">Serviços</NavButton>
            </NavBar>
            <PageContainer imagem={Background}>{children}</PageContainer>
            <Footer />
        </>
    );
}

const Nav = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${colors.black};
`;

const NavButton = styled.a`
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: none;
    width: 100%;
    background-color: transparent;
    font-family: ${font};
    height: 100%;
    font-weight: bold;
    transition: all 250ms linear;
    color: ${colors.black};
    text-decoration: none;
    &:hover {
        background-color: ${colors.lightGray};
    }
`;
const PageContainer = styled.div`
    background-image: ${(props) => `url(${props.imagem})`};
    max-width: 100vw;
    min-height: calc(93vh - 200px);
    width: 100vw;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2vh 0 2vh 0;
    flex-direction: column;
`;

const NavBar = styled.div`
    background-color: ${colors.secondary};
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const ProfileContainer = styled.div`
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
`;
const Header = styled.header`
    height: 150px;
    background-color: ${colors.primary};
    display: flex;
    padding: 0.2rem 1rem 1rem 1rem;
    justify-content: en;
    align-items: center;
    flex-direction: column;
    @media ${breakPoints.tablet} {
        display: flex;
        padding: 0.2rem 1rem 1rem 3rem;
    }
`;

const Twitter = styled(FaTwitterSquare)`
    color: ${colors.white};
    font-size: ${size.size2};
`;

const Instagram = styled(FaInstagramSquare)`
    color: ${colors.white};
    font-size: ${size.size2};
`;
const Github = styled(FaGithubSquare)`
    color: ${colors.white};
    font-size: ${size.size2};
`;
const Linkedin = styled(FaLinkedin)`
    color: ${colors.white};
    font-size: ${size.size2};
`;

const Name = styled.p`
    font-family: ${font};
    color: ${colors.white};
    font-weight: bold;
    margin: 0;
    font-size: ${size.size2};
    @media ${breakPoints.tablet} {
        font-size: ${size.size4};
    }
`;

const Stack = styled.p`
    font-family: ${font};
    color: ${colors.white};
    font-weight: bold;
    margin: 0;
    font-size: ${size.size1};
    @media ${breakPoints.tablet} {
        font-size: ${size.size2};
    }
    @media ${breakPoints.tablet} {
        font-size: ${size.size2};
    }
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
    padding: 0 0 0 0.5rem;
`;

const Avatar = styled.div`
    height: 100px;
    width: 100px;
    min-height: 100px;
    min-width: 100px;
    @media ${breakPoints.tablet} {
        height: 120px;
        width: 120px;
        min-height: 120px;
        min-width: 120px;
    }
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: ${colors.primary};
    display: flex;
    background-image: ${(props) => `url(${props.image})`};
`;
