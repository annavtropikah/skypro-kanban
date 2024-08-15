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
  const { updateTask } = useTasks();

  const [selectedDate, setSelectedDate] = useState(null);


  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",

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
      .then((data) => {
        console.log("что выводит?", data);
        if (data.error) {
          alert('Одно из полей не заполнено!Заполните поля: "название","описание","дату" и "категорию"')

        }
        else {
          updateTask(data.tasks)
          navigate(appRoutes.MAIN)
        }
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
              </S.PopBrowseTopBlock>
              <S.PopBrowseWrap>


                <S.PopBrowseForm>

                  <S.PopBrowseBlock>
                    <S.PopBrowseTaskSubttl htmlFor="formTitle">
                      Название задачи
                    </S.PopBrowseTaskSubttl>
                    <S.ForrmNewInput

                      type="text"
                      name="title"
                      value={newTask.title}
                      onChange={handleInputChange}
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      autoFocus
                    >
                    </S.ForrmNewInput>
                  </S.PopBrowseBlock>

                  <S.PopBrowseBlock>
                    <S.PopBrowseTaskSubttl>
                      Описание задачи
                    </S.PopBrowseTaskSubttl>
                    <S.FormNewArea
                      name="description"
                      value={newTask.description}
                      onChange={handleInputChange}
                      id="textArea01"
                      placeholder="Введите описание задачи..."
                    >
                    </S.FormNewArea>
                  </S.PopBrowseBlock>

                </S.PopBrowseForm>

                {/* <div>
                  <p>Дата</p>
                </div> */}

                <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              </S.PopBrowseWrap>

              <S.PopBrowseTaskSubttl>
                Категория
              </S.PopBrowseTaskSubttl>

              <S.RadioToolbar>





                <S.InputRadio
                  type="radio"
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <S.RadioToolbarLabel1 htmlFor="radio1">Web Design</S.RadioToolbarLabel1>

                <S.InputRadio
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange} />
                <S.RadioToolbarLabel2 htmlFor="radio2">Research</S.RadioToolbarLabel2>

                <S.InputRadio
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange} />
                <S.RadioToolbarLabel3 htmlFor="radio3">Copywriting</S.RadioToolbarLabel3>


              </S.RadioToolbar>
              <S.PopAddContainer>
                <S.PopBrowseBtnBrowse>

                  <S.PopBrowseBtnClose onClick={() => {
                    handleFormSubmit();

                  }}>
                    Создать задачу
                  </S.PopBrowseBtnClose>


                  <S.PopBrowseBtnClose>

                    <Link to={appRoutes.MAIN}>
                      <S.PopBrowseBtnClose className="btn-edit__close _btn-bg _hover01">
                        Закрыть
                      </S.PopBrowseBtnClose>
                    </Link>
                  </S.PopBrowseBtnClose>

                </S.PopBrowseBtnBrowse>







              </S.PopAddContainer>
            </S.PopBrowseContent>
          </S.PopBrowseBlock>
        </S.PopBrowseContainer>
      </S.PopBrowse >
    </>
  )
}