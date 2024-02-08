
import { useEffect, useState } from 'react'
import './App.css'
import Column from './components/Column/Column'

import Header from './components/Header/header'
import MainContent from './components/MainContent/MainContent'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopExit from './components/popups/PopExit/PopExit'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import { cardList } from './data'


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function App() {

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
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />

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
        
      </div>



    </>
  )
}

