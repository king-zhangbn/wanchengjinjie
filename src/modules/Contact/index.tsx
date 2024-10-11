import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>地址</h3>
                        <p>浙江杭州聚光科技C幢</p>
                        <p>任何时间联系均可 When</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
