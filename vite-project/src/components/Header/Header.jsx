import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";


export default function Header() {
  const { user } = useUser();
  const [isOpened, setIsOpened] = useState(false);
  const [theme, setTheme] = useState("day");


  function togglePopup() {
    setIsOpened((prevState) => !prevState);
  }
  return (
    <S.StyleHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="./images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          {/* <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="./images/logo_dark.png" alt="logo" />
            </a>
          </div> */}


          <S.HeaderNav>
            <Link to={appRoutes.NEW_CARD}>
              <S.ButtonAdd id="btnMainNew">
                Создать новую задачу
              </S.ButtonAdd>
            </Link>




            <S.HeaderUser onClick={togglePopup} >
              {user.name}
            </S.HeaderUser>
            {isOpened && (
              <S.HeaderPopupUserSet>
                {/* <a href="">x</a> */}
                <S.PopUserSetName>{user.name}</S.PopUserSetName>
                {/* <S.PopUserSetMail>{user.login}</S.PopUserSetMail> */}
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input
                  
                    onClick={(e) => { 
                      if (e.target.checked) {
                        setTheme('night')
                      } else {
                        setTheme('day')
                      }
                    }}
                    checked={theme==="night"}
                    type="checkbox"
                    name="checkbox"
                  />
                </S.PopUserSetTheme>
                <Link to={appRoutes.SIGNIN}>
                  <S.ButtonExit>
                    Выйти
                  </S.ButtonExit>
                </Link>
              </S.HeaderPopupUserSet>
            )}



          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyleHeader>
  )
}