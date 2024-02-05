import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import IntroPage from "./components/pages/IntroPage";
import RightNowPage from "./components/pages/RightNowPage";
import Layout from "./Layout";
import { useLogin } from "./components/api/onLogin";
import { QueryClient, QueryClientProvider } from "react-query";
import MyListPage from "./components/pages/MyListPage";
import SearchPage from "./components/pages/SearchPage";
import ArtistPage from "./components/pages/ArtistPage";
import AlbumPage from "./components/pages/AlbumPage";

const queryClient = new QueryClient();
//test
function App() {
  const { isLogin } = useLogin();
  const [headerActive, setHeaderActive] = useState(true);
  const onHeaderActive = (value) => setHeaderActive(value);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout headerActive={headerActive} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <IntroPage isLogin={isLogin} onHeaderActive={onHeaderActive} />
          ),
        },
        {
          path: "/now",
          element: (
            <RightNowPage isLogin={isLogin} onHeaderActive={onHeaderActive} />
          ),
        },
        {
          path: "/mylist",
          element: (
            <MyListPage isLogin={isLogin} onHeaderActive={onHeaderActive} />
          ),
        },
        {
          path: "/search",
          element: (
            <SearchPage isLogin={isLogin} onHeaderActive={onHeaderActive} />
          ),
        },
        {
          path: "/artist",
          element: <ArtistPage isLogin={isLogin} />,
        },
        {
          path: "/album",
          element: <AlbumPage isLogin={isLogin} />,
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
