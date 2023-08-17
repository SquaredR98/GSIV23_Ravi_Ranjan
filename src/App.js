import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:id",
    element: <MovieDetailsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
