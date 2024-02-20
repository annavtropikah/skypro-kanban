
import { Link } from 'react-router-dom'
import { appRoutes } from '../../lib/appRoutes'
import * as S from "./SignInPage.styled"
import "./SignIn.css"

export default function SignInPage() {
 

  return (
<>
  <S.Wrapper>
    <S.ConteinerSignin>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>Вход</h2>
          </S.ModalTtl>
          <S.ModalFormLogin>
            <input
              className="modal__input"
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <input
              className="modal__input"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <Link to={appRoutes.MAIN}>
            <S.ModalBtnEnter>
              Войти
            </S.ModalBtnEnter>
            </Link>
            <S.ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
             <Link to={appRoutes.SIGNUP}>
              <span>
              Регистрируйтесь здесь
              </span>
              </Link>
            </S.ModalFormGroup>
            </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Modal>
    </S.ConteinerSignin>
  </S.Wrapper>
</>
  )
}
