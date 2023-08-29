import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import IntroPage from "./components/IntroPage";
import MainPage from "./components/MainPage";
import Layout from "./Layout";
import { onLogin } from "./components/api/onLogin";

function App() {
  const [isLogin, setIsLogin] = useState(null);
  const onLoginClick = (token) => setIsLogin(token);
  useEffect(() => {}, [isLogin]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          onLoginClick={onLoginClick}
          onLogin={onLogin}
          isLogin={isLogin}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <IntroPage isLogin={isLogin} /> },
        {
          path: "/main",
          element: <MainPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
