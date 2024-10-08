
import { useEffect, useState } from 'react'
import Column from '../../components/Column/Column';
import MainContent from '../../components/MainContent/MainContent';
import { Wrapper } from '../../common/Common.styled';
import Header from '../../components/Header/Header';
import { GlobalStyle } from '../../common/Global.styled';


import { Outlet } from 'react-router-dom';
import { getTodos } from '../../api';
import { useUser } from '../../hooks/useUser';
import { useTasks } from '../../hooks/useTasks';


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {

  const { cards, updateTask } = useTasks();
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useUser()

  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      console.log(todos);
      updateTask(todos.tasks);
      setIsLoading(false);
    }).catch((error) => {
      alert(error)
    })
  }, [user, updateTask])


  return (
    <>
      <GlobalStyle />
      <Wrapper>

        <Outlet />

        <Header />
        {isLoading ? <img src="./images/loading-thinking.gif" alt="loading" /> : (<MainContent>
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

