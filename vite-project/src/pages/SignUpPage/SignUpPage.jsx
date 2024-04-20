
import { Link, useNavigate } from 'react-router-dom'
import { appRoutes } from '../../lib/appRoutes'

import * as S from "./SignUpPage.styled"
import { useState } from 'react'
import { signUp } from '../../api'
import { useUser } from '../../hooks/useUser'




export default function SignUpPage() {
  const { login } = useUser()
  const navigate = useNavigate()
  const [reginData, setReginData] = useState({
    name: "",
    login: "",
    password: ""
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setReginData({
      ...reginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };


  const handleRegin = async () => {

    await signUp(reginData).then((data) => {
      console.log(data);
      login(data.user)
      navigate(appRoutes.MAIN)
    })
  }



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
                  value={reginData.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  id="firstname"
                  placeholder="Имя"
                />
                <S.ModalInput
                  value={reginData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Логин"
                />
                <S.ModalInput
                  value={reginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.ModalBtnSignup onClick={handleRegin}>
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