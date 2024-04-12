import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopNewCard.styled"
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { useUser } from "../../../hooks/useUser";
import { postTodo } from "../../../api";
import { useTasks } from "../../../hooks/useTasks";


export default function PopNewCard() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { setCards } = useTasks();

  const [selectedDate, setSelectedDate] = useState(null);


  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: " ",
  })

  const handleFormSubmit = async () => {
    
    //полуим все поля из нью такс и запишем выбранную дату в объект по лключю date, так как апи ожитает дату под этим ключом
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    
    console.log(taskData);
// функция должна быть для отправки данных со второго курса
    await postTodo({ taskData, token: user.token })
      .then((tasksData) => {
        console.log(tasksData);
        setCards(taskData.tasks)
        navigate(appRoutes.MAIN);
      }).catch((error) => {
        alert(error)
      })

  }


  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };




  return (
    <>
      <S.PopBrowse>
        <S.PopBrowseContainer>
          <S.PopBrowseBlock>
            <S.PopBrowseContent>
              <S.PopBrowseTopBlock>
                <h3 className="pop-browse__ttl">Создание задачи</h3>
                <div className="categories__theme theme-top _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </S.PopBrowseTopBlock>

              <div className="pop-browse__status status">
                <S.PopBrowseTaskSubttl htmlFor="formTitle">
                  Название задачи
                </S.PopBrowseTaskSubttl>
                <textarea
                  className="form-browse__area"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  id="formTitle"
                  readOnly=""
                  placeholder="Введите название задачи..."
                  defaultValue={""}
                />

                <div className="status__themes">
                  <div className="status__theme _hide">
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme _hide">
                    <p className="_gray">Нужно сделать</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>В работе</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Готово</p>
                  </div>
                </div>
              </div>
              <S.PopBrowseWrap>
                <S.PopBrowseForm>
                  <S.PopBrowseBlock>
                    <S.PopBrowseTaskSubttl>
                      Описание задачи
                    </S.PopBrowseTaskSubttl>
                    <textarea
                      className="form-browse__area"
                      name="description"
                      value={newTask.description}
                      onChange={handleInputChange}
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={""}
                    />
                  </S.PopBrowseBlock>
                </S.PopBrowseForm>
                <Calendar selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate} />

              </S.PopBrowseWrap>

              <div className="prod_checbox">
                <S.PopBrowseTaskSubttl>
                  Категория
                </S.PopBrowseTaskSubttl>
                <div className="radio-toolbar">
                  <input
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio1">Web Design</label>

                  <input
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange} />
                  <label htmlFor="radio2">Research</label>

                  <input
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange} />
                  <label htmlFor="radio3">Copywriting</label>
                </div>
              </div>




              <S.PopBrowseBtnBrowse>

                <S.PopBrowseBtnClose onClick={() => {
                  handleFormSubmit();

                }}>
                  Создать задачу
                </S.PopBrowseBtnClose>


              </S.PopBrowseBtnBrowse>
              <div className="pop-browse__btn-edit ">

                <Link to={appRoutes.MAIN}>
                <S.PopBrowseBtnClose className="btn-edit__close _btn-bg _hover01">
                    Закрыть
                  </S.PopBrowseBtnClose>
                </Link>
              </div>
            </S.PopBrowseContent>
          </S.PopBrowseBlock>
        </S.PopBrowseContainer>
      </S.PopBrowse>
    </>
  )
}