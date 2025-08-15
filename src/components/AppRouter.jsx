import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { privateRoutes, publicRoutes } from "../routes";
import { AuthContext } from "../context";

export default function AppRouter() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function NotCorrectURL() {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/posts", { replace: true });
    }, [navigate]);

    return null;
  }
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((r) => (
            <Route path={r.path} element={<r.component />} exact={r.exact} />
          ))
        : publicRoutes.map((r) => (
            <Route path={r.path} element={<r.component />} exact={r.exact} />
          ))}
      <Route path="*" element={<NotCorrectURL />} />
    </Routes>
  );
}
