import Styles from "./CardsSection.module.css"
import Card from "../Card/Card"

export default function CardsSection(props) {
    return (
        <div className={Styles.CardsSection}>
            {props.data.map((card) => {
                return <Card cardData={card} key={card.id} />
            })}
        </div>
    )
}