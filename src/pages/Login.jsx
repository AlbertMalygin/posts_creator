import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    setIsAuth(true);
  }
  return (
    <div className="Login pageContent">
      <form className="login__form">
        <h1>Авторизация</h1>
        <MyInput placeholder="Введите логин..." />
        <MyInput placeholder="Введите пароль..." />
        <MyButton onClick={login}>Войти</MyButton>
      </form>
    </div>
  );
}
