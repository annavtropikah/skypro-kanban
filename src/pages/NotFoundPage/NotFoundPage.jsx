import * as S from "./NotFoundPage.styled"

export default function NotFoundPage() {
    return (
        <div>
            <section>
                <S.ContainerNotFound>
                    <S.TextxNotFound>
                        <p>Страница не найдена</p>
                        <a href="./">На главную</a>
                    </S.TextxNotFound>
                    <div className="image404"> 
                        <img  src="./images/errorimg.png" alt="404 error" />
                    </div>
                    </S.ContainerNotFound>
            </section>
        </div>
    )
}