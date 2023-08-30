import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import IntroPage from "./components/IntroPage";
import MainPage from "./components/MainPage";
import Layout from "./Layout";
import { onLogin } from "./components/api/onLogin";

function App() {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const onGetToken = async () => {
      const token = await onLogin();
      setIsLogin(token);
    };

    onGetToken();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isLogin={isLogin} />,
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
