import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <S.FooterContainer>
                    <Logo />
                    <S.FooterContent>
                        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024118647号-1</a>
                    </S.FooterContent>
                </S.FooterContainer>
                <Socials />
            </Container>
        </S.FooterStyled>
    );
};
