
import { Link } from 'react-router-dom'
import { appRoutes } from '../../lib/appRoutes'

import * as S from "./SignUpPage.styled"



export default function SignUpPage() {
 

  return (
<>
<S.Wrapper>
  <S.ConteinerSignUp>
    <S.Modal>
      <S.ModalBlock>
        <S.ModalTtl>
          <h2>Регистрация</h2>
        </S.ModalTtl>
        <S.ModalFormLogin>
          <S.ModalInput
            className="modal__input first-name"
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Имя"
          />
          <S.ModalInput
            className="modal__input login"
            type="text"
            name="login"
            id="loginReg"
            placeholder="Эл. почта"
          />
          <S.ModalInput
            className="modal__input password-first"
            type="password"
            name="password"
            id="passwordFirst"
            placeholder="Пароль"
          />
          <S.ModalBtnSignup>
          Зарегистрироваться
          </S.ModalBtnSignup>
          <S.ModalFormGroup>
            <p>Уже есть аккаунт?</p>
              <Link to={appRoutes.SIGNIN}>
              <span>
                Войдите здесь
                </span>
              </Link>
          </S.ModalFormGroup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Modal>
  </S.ConteinerSignUp>
</S.Wrapper>

</>
  )
}
