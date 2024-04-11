import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopBrowse.styled"
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
import { useState } from "react";
import { deleteTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";


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
                <p className="_orange">{currentTask.topic}</p>
                {/* ПОСМОТРЕТЬ ИНСТРУКЦИЮ И СДЕЛАТЬ ПО АНАЛОГИИ ЧТОБЫ МЕНЯЛСЯ ЦВЕТ ТЕМЫ<S.CardTheme $themeColor={topicHeader[topic]} >
                    <S.TopicText>{topic}</S.TopicText>
                </S.CardTheme> */}
              </div>

            </S.PopBrowseTopBlock>
            {isEdit && (
              <S.PopBrowseStatus>
                <p className="status__p">Статус</p>

                <div className="status__themes">
                  <div className="status__theme ">
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme _gray">
                    <p className="_gray">Нужно сделать</p>
                  </div>
                  <div className="status__theme">
                    <p>В работе</p>
                  </div>
                  <div className="status__theme">
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme ">
                    <p>Готово</p>
                  </div>
                </div>
              </S.PopBrowseStatus>
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
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <Link to={appRoutes.TASK}>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    Отменить
                  </button>
                </Link>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <Link to={appRoutes.MAIN}>
                <span className="btn-edit__close _btn-bg _hover01">
                  Закрыть
                </span>
              </Link>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  )
}