'use client'

//import { endpoints } from '@/app/api/config';
import Styles from './AuthForm.module.css';
import { useEffect, useState } from 'react';
//import { authorize, isResponseOk, } from '@/app/api/api-utils';
//import { useStore } from '@/app/store/app-store';
import { RegForm } from "./RegForm"

export const AuthForm = (props) => {

//  const authContext = useStore();
  const [authData, setAuthData] = useState({ identifier: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null }); 

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  } 

      const handleSubmit = async (e) => {
//    e.preventDefault();
//  
//    const userData = await authorize(endpoints.auth, authData);
//  
//    if (isResponseOk(userData)) {
//      authContext.login(userData.user, userData.jwt);
//      setMessage({ status: "success", text: "Вы авторизовались!" });
//    } else {
//      setMessage({ status: "error", text: "Неверные почта или пароль" });
//    }
  }; 

//  useEffect(() => {
//    let timer; 
//    if (authContext.user) {
//      timer = setTimeout(() => {
//        props.close();
//      }, 1000);
//    }
//    return () => clearTimeout(timer);
//  }, [authContext.user]); 

  const [isRegistration, setIsRegistration] = useState(false)

  return (
    isRegistration ?
      (
        <RegForm isRegistration={isRegistration} setIsRegistration={setIsRegistration} 
        //store={store} 
        />
      )

      :

      (
        <form onSubmit={handleSubmit} className={Styles['form']}>
          <h2 className={Styles['form__title']}>Авторизация</h2>
          <div className={Styles['form__fields']}>
            <label className={Styles['form__field']}>
              <span className={Styles['form__field-title']}>Email</span>
              <input 
                onInput={handleInput} 
                className={Styles['form__field-input']} 
                name="identifier" 
                type="email" 
                placeholder="Введите почту"
              />
            </label>
            <label className={Styles['form__field']}>
              <span className={Styles['form__field-title']}>Пароль</span>
              <input 
                onInput={handleInput}
                className={Styles['form__field-input']} 
                name="password"
                type="password" 
                placeholder='Введите пароль'
              />
            </label>
          </div>
          {/* {message.status && (
            <p className={Styles["form__message"]}>{message.text}</p>
          )}  */}
          <div className={Styles['form__actions']}>
            <button className={Styles['form__submit']} type="submit">Войти</button>
          </div>
          <div className={Styles['form__actions_button']}>
            <button className={props.isRegistration ? Styles['form__changeButton_active'] : Styles['form__changeButton']} type="button" onClick={() => { setIsRegistration(true) }}>Регистрация</button>
            <button className={props.isRegistration ? Styles['form__changeButton'] : Styles['form__changeButton_active']} type="button" onClick={() => { setIsRegistration(false) }}>Авторизация</button>
          </div>
        </form>
      )
  ) 
};