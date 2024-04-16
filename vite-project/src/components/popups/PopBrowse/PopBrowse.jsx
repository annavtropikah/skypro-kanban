import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopBrowse.styled"
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
import { useState } from "react";
import { deleteTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { topicHeader } from "../../../lib/topic";


export default function PopBrowse() {
  const { id } = useParams();
  const { user } = useUser();
  const { cards, updateTask } = useTasks();
  const navigate = useNavigate();
  const currentTask = cards.find((card) => id === card._id)


  const [selectedDate, setSelectedDate] = useState(currentTask.date)



  // создаем состояние для редактирования 
  const [isEdit, setIsedit] = useState(false)
  //в режиме редактирования нужно поработать с датой
  // const [selectedDate, setSelectedDate] = useState(currentTask.date); 
  //нужно какие-то поля скрыть и показать в сосоянии


  const [newTask, setNewTask] = useState({
    title: currentTask.title, 
    description: currentTask.description,
    topic: currentTask.topic,
  })
  if (!currentTask) {
    return <Navigate to={appRoutes.MAIN} />
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleTaskDelete = async (e) => {
    e.preventDefault()
    await deleteTodo({
      id,
      token: user.token,
    }) 
    .then((data)=>{
      console.log(data)
      updateTask(data.tasks)
      navigate(appRoutes.MAIN)
    })
    .catch((error)=>{
      console.error(error)
    })
  }

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <h3 className="pop-browse__ttl">Название задачи:{currentTask.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                
                <S.CardTheme $themeColor={topicHeader[currentTask.topic]} >
                    <S.TopicText>{currentTask.topic}</S.TopicText>
                </S.CardTheme> 
              </div>

            </S.PopBrowseTopBlock>
            {isEdit && (
              <>
              <S.PopBrowseTaskSubttl>Статус</S.PopBrowseTaskSubttl>
             
              <S.RadioToolbar>

                
              <S.InputRadio
                  type="radio"
                  id="radio1"
                  name="status"
                  value="Нужно сделать"
                  onChange={handleInputChange}
                />
                <S.RadioToolbarLabel1 htmlFor="radio1">Нужно сделать</S.RadioToolbarLabel1>

                <S.InputRadio
                  type="radio"
                  id="radio2"
                  name="status"
                  value="В работе"
                  onChange={handleInputChange} />
                <S.RadioToolbarLabel2 htmlFor="radio2">В работе</S.RadioToolbarLabel2>

                <S.InputRadio
                  type="radio"
                  id="radio3"
                  name="status"
                  value="Тестирование"
                  onChange={handleInputChange} />
                <S.RadioToolbarLabel3 htmlFor="radio3">Тестирование</S.RadioToolbarLabel3>
                
                <S.InputRadio
                  type="radio"
                  id="radio4"
                  name="status"
                  value="Готово"
                  onChange={handleInputChange} />
                <S.RadioToolbarLabel4 htmlFor="radio4">Готово</S.RadioToolbarLabel4>  

               
                
              </S.RadioToolbar>
              </>
            )}

            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.PopBrowseBlock>
                  <S.PopBrowseTaskSubttl>
                    Описание задачи
                  </S.PopBrowseTaskSubttl>
                  <textarea
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    // readOnly=""
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."

                  />
                </S.PopBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selectedDate={selectedDate}
                setSelectedDate={setSelectedDate} />
            </S.PopBrowseWrap>
            {!isEdit && (
            <S.PopBrowseBtnBrowse>
              <S.PopBrowseBtnGroup>
                <S.PopBrowseBtnEdit onClick={() => setIsedit(true)}>
                  Редактировать задачу
                </S.PopBrowseBtnEdit>
                <S.PopBrowseBtnDelit onClick={handleTaskDelete}>
                  Удалить задачу
                </S.PopBrowseBtnDelit>
              </S.PopBrowseBtnGroup>
              <Link to={appRoutes.MAIN}>
                <S.PopBrowseBtnClose>
                  Закрыть
                </S.PopBrowseBtnClose>
              </Link>
              
            </S.PopBrowseBtnBrowse>
            )}
            {isEdit && (
            <S.PopBrowseBtnBrowse>
              <S.PopBrowseBtnGroup>
                <S.PopBrowseBtnClose>
                  Сохранить
                </S.PopBrowseBtnClose>
                <Link to={appRoutes.MAIN}>
                  <S.PopBrowseBtnEdit>
                    Отменить
                  </S.PopBrowseBtnEdit>
                </Link>
                <S.PopBrowseBtnEdit onClick={handleTaskDelete}>
                  Удалить задачу
                </S.PopBrowseBtnEdit>
              </S.PopBrowseBtnGroup>
              <Link to={appRoutes.MAIN}>
                <S.PopBrowseBtnClose>
                  Закрыть
                </S.PopBrowseBtnClose>
              </Link>
            </S.PopBrowseBtnBrowse>
              )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  )
}