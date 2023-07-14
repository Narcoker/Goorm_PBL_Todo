import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import { Provider } from "react-redux";
import {store} from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
