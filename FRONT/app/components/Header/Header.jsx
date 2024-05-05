'use client'

import Styles from "./Header.module.css"
import Link from "next/link";
import { useState } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";


export const Header = () => {

  const [popupIsOpened, setPopupIsOpened] = useState(false);

  const openPopup = () => {
    setPopupIsOpened(true)
  }

  const closePopup = () => {
    setPopupIsOpened(false)
  }

  return (
    <header className={Styles['header']}>
      <div className={Styles['contentWrapper']}>
        <nav className={Styles['headerLinksWrapper']}>
          <span onClick={openPopup} className={`${Styles['headerLink']} ${Styles['auth']}`}>Войти</span>
          <Link href="#" className={Styles['headerLink']}>Избранные вакансии</Link>
          <Link href="/"><img src="/img/mainLogo.svg" alt="headerLogo" /></Link>
          <Link href="/search" className={Styles['headerLink']}>Поиск вакансий</Link>
          <Link href="/create" className={Styles['headerLink']}>Создать объявление</Link>
        </nav>
      </div>
      <Overlay isOpened={popupIsOpened} close={closePopup}/>
      <Popup isOpened={popupIsOpened} close={closePopup}>
        <AuthForm close={closePopup} />
      </Popup>
    </header>
  );
};