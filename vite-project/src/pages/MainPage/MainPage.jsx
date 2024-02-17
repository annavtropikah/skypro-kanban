
import { useEffect, useState } from 'react'
import { cardList } from '../../data'
import Column from '../../components/Column/Column';
import MainContent from '../../components/MainContent/MainContent';
import { Wrapper } from '../../common/Common.styled';
import Header from '../../components/Header/Header';
import { GlobalStyle } from '../../common/Global.styled';
import PopExit from '../../components/popups/PopExit/PopExit';
import PopNewCard from '../../components/popups/PopNewCard/PopNewCard';
import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';

// import { Outlet } from 'react-router-dom';


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {

  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* <Outlet/> */}

        <Header addCard={addCard} />
        {isLoading ? "Loading......." : (<MainContent>
          {statusList.map((status) => (
            <Column
              //следом статус колонки
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

