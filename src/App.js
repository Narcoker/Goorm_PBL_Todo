import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Landing from "./pages/Landing/Landing";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
