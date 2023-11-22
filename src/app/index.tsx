import { createRoot } from "react-dom/client";

// Роутинг
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

// Редакс
import { Provider } from "react-redux";
import store from "./store";

// Стили
import "app/scss/index.scss";

const app = (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

const root = createRoot(document.getElementById("root"));
root.render(app);
