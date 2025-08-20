import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useContext, useState } from "react";
import { AuthContext } from "../context";

export default function LoginForm() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function login(e) {
    e.preventDefault();
    if (!userName || !userPassword) {
      alert("Недостаточно данных для входа!");
      return;
    }
    setIsAuth(true);
    localStorage.setItem(
      "post_creator_auth",
      `{"login":"${userName}","password":"${userPassword}"}`
    );
  }
  return (
    <form className="login__form">
      <h1>Авторизация</h1>
      <MyInput
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        placeholder="Введите логин..."
      />
      <MyInput
        onChange={(e) => setUserPassword(e.target.value)}
        value={userPassword}
        placeholder="Введите пароль..."
      />
      <MyButton onClick={login}>Войти</MyButton>
    </form>
  );
}
