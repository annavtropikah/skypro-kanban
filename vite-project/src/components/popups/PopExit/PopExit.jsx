import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopExit.styled";
import { useUser } from "../../../hooks/useUser";

export default function PopExit() {
    const { logout } = useUser()
    const navigate = useNavigate()
    return (

        <S.PopExit>
            <S.PopExitContainer>
                <S.PopExitBlock>
                    <S.PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </S.PopExitTtl>
                    <span>
                        <S.PopExitFormGroup>

                            <S.PopExitYes onClick={() => {
                                logout()
                                navigate(appRoutes.SIGNIN)

                            }}>
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
