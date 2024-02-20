import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopExit.styled";

export default function PopExit({logout}) {
    return (

        <S.PopExit>
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <S.PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </S.PopExitTtl>
                    <span>
                        <S.PopExitFormGroup>
                           
                            <S.PopExitYes onClick={logout}>
                            Да, выйти
                            </S.PopExitYes>
                            
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
