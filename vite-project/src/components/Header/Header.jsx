import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";


export default function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
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
            <S.ButtonAdd onClick={addCard} id="btnMainNew">
              Создать новую задачу
            </S.ButtonAdd>



            <S.HeaderUser onClick={togglePopup} >
              Ivan Ivanov
            </S.HeaderUser>
            {isOpened && (
           <S.HeaderPopupUserSet>
                {/* <a href="">x</a> */}
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox"  name="checkbox" />
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