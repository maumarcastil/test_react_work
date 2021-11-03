import "./App.css";
import "antd/dist/antd.css";
import "bootstrap-4-grid/css/grid.css";
import { BrowserRouter as Router } from "react-router-dom";

/* Redux */
import { Provider } from "react-redux";
import { store, persistor } from "./reducer/store";
import { PersistGate } from "redux-persist/integration/react";
import RootRouter from "./routes";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootRouter />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
