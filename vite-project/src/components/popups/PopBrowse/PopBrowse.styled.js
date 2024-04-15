import styled from 'styled-components';
import { topicStyles } from '../../../lib/topic';


export const PopBrowse = styled.div`
display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  
  

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


export const PopBrowseBlock = styled.div`
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
  margin-bottom: 18px;
`;






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


export const PopBrowseWrap = styled.div`
 display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
`;


export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-right:40px;
 
  
`;


export const PopBrowseTaskSubttl = styled.label`
color: #000;
font-size: 14px;
font-weight: 600;
line-height: 1;

`;

// export const PopBrowseArea = styled.textarea`
//   max-width: 370px;
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: #EAEEF6;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//   margin-top: 14px;
//   height: 200px;

//   &::-moz-placeholder {
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 1px;
//   color: #94A6BE;
//   letter-spacing: -0.14px;
// }

// &::placeholder {
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 1px;
//   color: #94A6BE;
//   letter-spacing: -0.14px;
// }

// `;


export const PopBrowseBtnBrowse = styled.div`
 width: 100%;
  height: 40px;
  display:flex


`;

export const PopBrowseBtnGroup = styled.div`
 width: 100%;
 margin-right: 0px;
 display:flex
 
`;

export const PopBrowseBtnEdit = styled.span`

  
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color:  #565EEF;
  margin-right:8px;
  padding:8px 15px;
  
  
  &:hover{
    background-color: #33399b;
    color: #FFFFFF;
  }
@media screen and (max-width: 495px) {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}
`;


export const PopBrowseBtnDelit = styled.span`



  
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color:  #565EEF;
  padding:8px 15px;
  
  
  &:hover{
    background-color: #33399b;
    color: #FFFFFF;
  }
@media screen and (max-width: 495px) {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}
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
`;

export const PopBrowseStatus= styled.div`

  
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color:  #565EEF;
  margin-right:8px;
  padding:8px 15px;
  
  
  &:hover{
    background-color: #33399b;
    color: #FFFFFF;
  }
@media screen and (max-width: 495px) {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}
`;