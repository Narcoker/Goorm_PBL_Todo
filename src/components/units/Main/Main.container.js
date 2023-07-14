import MainPresenter from "./Main.presenter";
import { useDispatch, useSelector } from "react-redux";
import { setModeADD, setModeEDIT } from "../../../app/PageMode/pageModeSlice";

function MainContainer() {
  const dispatch = useDispatch();
  const pageState = useSelector((state) => state.pageMode.mode);
  const handleSetModeADD = () => {
    dispatch(setModeADD());
  };
  const handleSetModeEDIT = () => {
    dispatch(setModeEDIT());
  };

  return (
    <MainPresenter
      pageState={pageState}
      handleSetModeADD={handleSetModeADD}
      handleSetModeEDIT={handleSetModeEDIT}
    />
  );
}

export default MainContainer;
