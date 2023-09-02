import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import IntroPage from "./components/pages/IntroPage";
import RightNowPage from "./components/pages/RightNowPage";
import Layout from "./Layout";
import { onLogin } from "./components/api/onLogin";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
          element: <RightNowPage />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
