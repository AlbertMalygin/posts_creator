import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";

export default function UserPage() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout(event) {
    event.preventDefault();
    setIsAuth(false);
  }
  return (
    <div>
      <h1 className="devInfo">Страница пользователя в разработке...</h1>
      <Loader />
      <MyButton onClick={logout}>Выйти из аккаунта</MyButton>
    </div>
  );
}
