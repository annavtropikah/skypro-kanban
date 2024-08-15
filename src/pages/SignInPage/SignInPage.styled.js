import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #EAEEF6;
`;

export const ConteinerSignin = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

export const Modal = styled.div`
 width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 375px) {
      background-color: #FFFFFF;
    }
`;


export const ModalBlock = styled.div`
display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 15px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
    }
`;

export const ModalTtl = styled.div`
& h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
    color:black;
}
`;


export const ModalFormLogin = styled.div`
 width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & input:first-child {
    margin-bottom: 8px;
    
  }
`;


export const ModalBtnEnter = styled.span`
display: block;
    margin: 0 auto;
    background-color: #565EEF;
    color:white;
    min-width:370px;
    
    padding:8px;
    margin-top:20px;
    margin-bottom:20px;
    text-align:center;

    border-radius: 5px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

    
    &:hover {
        background-color: #33399b;
    }
    @media screen and (max-width: 375px) {
       
      width:90vw;
  }
`;

export const ModalFormGroup = styled.form`
 text-align: center;
 & p,span{
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
 }
 & span{
    text-decoration:underline
 }
`;





export const ModalInput = styled.input`
 width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px;
    &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }
`;