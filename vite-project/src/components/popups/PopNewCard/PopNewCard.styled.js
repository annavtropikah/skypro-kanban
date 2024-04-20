import styled from 'styled-components';
import { topicStyles } from '../../../lib/topic';


export const PopBrowse = styled.div`
 width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

`;

export const PopBrowseContainer = styled.div`

width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  
  
`;

export const PopBrowseWrap = styled.div`
 display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
`;

export const PopBrowseForm = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  margin-right:40px;
  
`;


export const PopBrowseBlock = styled.div`
display: flex;
  flex-direction: column;
display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;

  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 0px 40px;
  

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
`;



export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
`

export const PopBrowseContent = styled.div`
display: block;
  text-align: left;
  margin-left:20px;
  margin-right: 20px; 
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;



export const ForrmNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
`




export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
    font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  }
`;








export const PopBrowseTaskSubttl = styled.label`
color: #000;
font-size: 14px;
font-weight: 600;
line-height: 1;

`;


export const PopBrowseBtnBrowse = styled.div`
 width: 100%;
  height: 40px;
  display:flex;
  justify-content:space-between;


`;











export const RadioToolbar = styled.div`
margin-top:15px;

`
export const RadioToolbarLabel1 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #ff6d00;
  background: #ffe4c2;
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`

export const RadioToolbarLabel2 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #06b16e;
  background: #b4fdd1;
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`

export const RadioToolbarLabel3 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #9a48f1;
  background: #e9d4ff;
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
    
  }
`

export const PopAddContainer= styled.div`

width: 100%;


  padding: 10 16 px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  
  
  
`;
export const PopBrowseBtnClose = styled.span`


  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  padding:8px 15px;


  &:hover{
    background-color: #33399b;
  
 }
@media screen and (max-width: 495px) {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
 }
`

export const InputRadio = styled.input`
  display: none;

&:checked + label {
  opacity: 100%;
}
`