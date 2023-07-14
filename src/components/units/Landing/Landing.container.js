import React from "react";
import LandingPresenter from "./Landing.presenter";
import { useNavigate } from "react-router-dom";

function LandingContainer() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("main");
  };
  return <LandingPresenter handleButton={handleButton} />;
}

export default LandingContainer;
