import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import routes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
}

export default App;
