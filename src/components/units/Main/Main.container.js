import React, { useState } from "react";
import MainPresenter from "./Main.presenter";
import { MODE } from "../../commons/constants";

function MainContainer() {
  const [mode, setMode] = useState(MODE.ADD);

  return <MainPresenter mode={mode} setMode={setMode} />;
}

export default MainContainer;