import styled from 'styled-components';

export const StyleHeader = styled.header`

  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;

`
  ;

export const HeaderBlock = styled.div`

  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;

;`
export const HeaderNav = styled.nav`

max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

;`

export const HeaderUser = styled.div`

height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight:500;
  line-height: 20px;
  color: #565EEF;

  &:hover {
    color: #33399b;
  }
  &::after {
  content: "";
  display: flex;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565EEF;
  border-bottom: 1.9px solid #565EEF;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
 
}
&:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
    
}
;`

export const ButtonAdd = styled.button`

width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  outline: none;


  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;







export const PopUserSetName = styled.p`

color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
;`

export const PopUserSetMail = styled.p`

color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
;`

export const PopUserSetTheme = styled.div`

display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  & p {
    color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  }
  & input {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  &::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}
  &:checked::before {
  left: 12px;
}
}
;`


export const ButtonExit = styled.button`

width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
  cursor: pointer;
  outline: none;

& a {
  color: #565EEF;
  &:hover {
  color: #FFFFFF;
}
}
&:hover {
    background-color: #33399b;
  color: #FFFFFF;
  & a  {
  color: #FFFFFF;
}
  }

`;
