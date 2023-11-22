import { createBrowserRouter } from "react-router-dom";
import { Main } from "pages";
import ROUTES from "./routes.enum";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Main />,
  },
]);

export default router;
