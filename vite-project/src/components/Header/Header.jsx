import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../common/Common.styled";


export default function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prevState) => !prevState);
  }
  return (
    <S.StyleHeader>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="./images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="./images/logo_dark.png" alt="logo" />
            </a>
          </div>


          <S.HeaderNav>
            <S.ButtonAdd onClick={addCard} id="btnMainNew">
              Создать новую задачу
            </S.ButtonAdd>



            <S.HeaderUser onClick={togglePopup} >
              Ivan Ivanov
            </S.HeaderUser>
            {isOpened && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <a href="">x</a> */}
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox"  name="checkbox" />
                </S.PopUserSetTheme>
                <S.ButtonExit type="button" >
                  <a href="#popExit">Выйти</a>
                </S.ButtonExit>
              </div>
            )}



          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyleHeader>
  )
}