import Styles from "./BigCard.module.css"

//сделал только вёрстку
//сори криво немного сверстал, спать хочу
export default function BigCard(props) {
  return (
    <article className={Styles.BigCard}>
      <div className={Styles.vacancy_header}>
        <img className={Styles.logo} src={`${props.data[2].img}`} alt="" />
        <div className="title">
          <h2 className={Styles.vacancy_name}>Frontend developer (React)</h2>
          <div className={Styles.vacancy_info}>
            <span id={Styles.left_elem} className={Styles.company_info}>Winfinity</span>
            <span id={Styles.right_elem}className={Styles.company_info}>Москва</span>
          </div>
        </div>
      </div>
      <h2 className={Styles.salary}>От 150 000 до 300 000 руб.</h2>
      <div className={Styles.vacancy_description}>
        <p>Мы, <span className={Styles.desc_span}>Winfinity</span>, занимаемся разработкой 
        инновационных решений в области игорно-развлекательного контента.</p>
        
        <p>Для создания наших продуктов используются передовые технологии, 
          среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. 
          У нас очень крутой и суперсовременный технопарк - от камер и света, до графических 
          карт, которые почти невозможно найти.</p>

        <p>Сегодня мы на стадии активного развития. Мы создаём масштабный, 
          технологически сложный и в тоже время очень интересный, глобальный 
          проект - частью которого можете стать Вы!</p>

        <p><span className={Styles.desc_span}>И если у Вас есть:</span></p>

        <p>опыт коммерческой разработки на JavaScript от 2 лет;
        опыт коммерческой разработки на React от 2 лет;
        опыт работы в команде с git;
        опыт работы с любым сборщиком (webpack, gulp и т.д.).
        <p>…то <span className={Styles.desc_span}>Вы именно тот, кого мы ищем!</span></p></p>

        <p>Обязательные знания:</p>

        <p>Typescript;</p>
        <p>Webpack;</p>
        <p>Styled-components;</p>
        <p>GraphQL;</p>
        <p>Express;</p>
        <p>MongoDB;</p>
        <p>WebSockets;</p>
        <p>Docker.</p>
        <p>После испытательного срока мы предлагаем:</p>

        <p>возможную релокацию в столицу Латвии с помощью в оформлении всех необходимых документов;
        бесплатную стоянку рядом с современным офисом в центре города;
        медицинскую страховку;
        абонемент в спортивный зал.
        Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.</p>

        <p>Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.</p>
      </div>
    </article>
  )
}

