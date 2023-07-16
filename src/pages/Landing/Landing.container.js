import React from "react";
import { useNavigate } from "react-router-dom";
import LandingPresenter from "./Landing.presenter";

function LandingContainer() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("main");
  };
  return <LandingPresenter handleButton={handleButton} />;
}

export default LandingContainer;
