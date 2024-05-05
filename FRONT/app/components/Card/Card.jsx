"use client"
import { useState } from 'react'
import Styles from './Card.module.css'

export default function Card(props) {
    const [isLiked, setIsLiked] = useState(props.cardData.isLiked)


    return (
        <div className={Styles.card} key={props.cardData.id}>
            <img className={Styles.logo} src={`${props.cardData.img}`} alt="internet-people logo" />
            <div className={Styles.vacancyInfo}>
                <div className={Styles.companyInfo}>
                    <span>{props.cardData.company}</span>
                    <h3>{props.cardData.vacansyName}</h3>
                    <span>{props.cardData.city}</span>
                </div>
                <div id="filtersContainer" className={Styles.filters}>
                    {
                        props.cardData.technologies.map((item) => {
                            return (

                                <span key={item.id}>{item.technologie}</span>)
                        })
                    }
                </div>
            </div>
            <div className={Styles.cardAttr}>
                <img src={isLiked ? "./img/like-on.svg" : "./img/like-off.svg"} onClick={() => { setIsLiked(!isLiked) }} alt="favorite" />
                <span className={Styles.vacansyDate}>{props.cardData.date}</span>
            </div>
        </div >
    )

}