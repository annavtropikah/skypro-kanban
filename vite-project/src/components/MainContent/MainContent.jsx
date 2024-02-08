import { Container } from "../../common/Common.styled";
import * as S from "./MainContent.styled";

export default function MainContent({children}) {
    return (
        <S.MainStyle>
            <Container>
                <S.MainBlock>
                    <S.MainContent>
                        {children}
            
                    </S.MainContent>
                </S.MainBlock>
            </Container>
        </S.MainStyle>
    )
}