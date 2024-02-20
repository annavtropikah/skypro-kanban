
import { useEffect, useState } from 'react'
import Column from '../../components/Column/Column';
import MainContent from '../../components/MainContent/MainContent';
import { Wrapper } from '../../common/Common.styled';
import Header from '../../components/Header/Header';
import { GlobalStyle } from '../../common/Global.styled';


import { Outlet } from 'react-router-dom';
import { getTodos } from '../../api';


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage({ user }) {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      console.log(todos);
      setCards(todos.tasks);
      setIsLoading(false);
    }).catch((error)=>{
      alert (error)
    })
  }, [user])

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "29.10.23",
      status: "Без статуса",
    }
    setCards([...cards, newCard])
  }


  return (
    <>
      <GlobalStyle />
      <Wrapper>

        <Outlet />

        <Header addCard={addCard} />
        {isLoading ? "Loading......." : (<MainContent>
          {statusList.map((status) => (
            <Column

              title={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))}

        </MainContent>)}

      </Wrapper>
    </>
  )
}

