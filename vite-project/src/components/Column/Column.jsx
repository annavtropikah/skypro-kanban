
import Card from "../Card/Card";
import * as S from "./Column.styled";


export default function Column({ title, cardList}) {

    return (
        <S.MainColumn>
            <S.ColumnTitle>
                <S.ColumnTitleP>{title}</S.ColumnTitleP>
            </S.ColumnTitle>
            <S.CardsStyle>
                {cardList.map((task) => <Card topic={task.topic} title={task.title} date={task.date} key={task._id} id={task._id} />)}


            </S.CardsStyle>
        </S.MainColumn>
    )
}