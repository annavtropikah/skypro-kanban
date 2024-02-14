import Card from "../Card/Card";
import * as S from "./Column.styled";

export default function Column({title, cardList}) {
    return (
        <S.MainColumn>
            <S.ColumnTitle>
                <S.ColumnTitleP>{title}</S.ColumnTitleP>
            </S.ColumnTitle>
            <S.CardsStyle>
                {cardList.map((card)=><Card topic={card.theme} title={card.title} date={card.date} key={card.id}/>)}
               {/* <Card topic={"Web design"} title={"Новая задача"}/>
               <Card topic={"Research"} title={"Новая задача"}/>
               <Card topic={"Web design"} title={"Новая задача"}/>
               <Card topic={"Research"} title={"Новая задача"}/>
               <Card topic={"Web design"} title={"Новая задача"}/> */}

               
            </S.CardsStyle>
        </S.MainColumn>
    )
}