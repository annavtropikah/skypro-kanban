
import { Link } from 'react-router-dom'
import { appRoutes } from '../../lib/appRoutes'
import * as S from "./SignInPage.styled"
import { useState } from 'react'
import { signIn } from '../../api'

export default function SignInPage({login}) {
  const [loginData, setLoginData] = useState({ login: "", password: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleLogin = async() => {

await signIn(loginData).then((data)=>{
  login(data.user)
})

  }
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
                <S.ModalInput
                  value={loginData.login}
                  onChange={handleInputChange}
                  className="modal__input"
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  value={loginData.password}
                  onChange={handleInputChange}
                  className="modal__input"
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
            
                  <S.ModalBtnEnter onClick={handleLogin}>
                    Войти
                  </S.ModalBtnEnter>
              
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
