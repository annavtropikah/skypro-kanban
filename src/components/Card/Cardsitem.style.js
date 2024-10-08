import styled from 'styled-components';
import { topicStyles } from '../../lib/topic';

export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 0px 14px;
  padding-bottom:8px;
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

export const CardItem= styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`
;

export const CardCard= styled.div`
width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
}
;`


export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;
export const CardBtnDiv = styled(CardBtn)`
 width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: #94A6BE;
`;



export const CardGroup= styled.div`
width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
;`

export const CardContent= styled.div`
height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
;`
export const CardTitle= styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
;`
export const CardDate= styled.div`
 display: flex;
  align-items: center;
  justify-content: flex-start;
  
;`
//SVG????
export const CardDateSwg= styled.svg`
  width: 13px;
  
;`


export const CardDateP= styled(CardDate)`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
;`