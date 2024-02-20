import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopExit.styled";

export default function PopExit() {
    return (

        <S.PopExit>
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <S.PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </S.PopExitTtl>
                    <span>
                        <S.PopExitFormGroup>
                           <Link to={appRoutes.SIGNIN}>
                            <S.PopExitYes>
                            Да, выйти
                            </S.PopExitYes>
                            </Link>
                            <Link to={appRoutes.MAIN}>
                            <S.PopExitNo>
                               Нет, остаться
                            </S.PopExitNo>
                            </Link>
                        </S.PopExitFormGroup>
                    </span>
                </S.PopExitBlock>
            </S.PopExitContainer>
        </S.PopExit>
    )
}
