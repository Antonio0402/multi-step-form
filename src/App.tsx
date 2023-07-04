import {
  useCurrentIndex,
  useIsConfirmed,
  useIsFirstStep,
  useIsLastStep,
  useStepActions,
} from "./store";

import { PersonalInfo, SelectPlan, PickAddOns, FinishingUp } from "./sections";
import Confirmation from "./sections/Confirmation";
import clsx from "clsx";
import Sidebar from "./components/Sidebar";

function App() {
  const currentIndex = useCurrentIndex();
  const isFirstStep = useIsFirstStep();
  const isLastStep = useIsLastStep();
  const isConfirmed = useIsConfirmed();
  const { goBackWard, goForward, setConfirm } = useStepActions();

  return (
    <>
      <Sidebar currentIndex={currentIndex} />
      <div
        className={clsx("grid w-full sm:px-20", {
          "content-between": !isConfirmed,
          "place-items-center": isConfirmed,
        })}
      >
        <div className="mx-auto w-full px-4 sm:px-0 absolute sm:relative top-24 sm:top-0">
          <form
            id="form"
            className="flex flex-col justify-between px-6 bg-background-body rounded-xl py-8 shadow-sm sm:shadow-none"
          >
            {currentIndex === 0 && <PersonalInfo />}
            {currentIndex === 1 && <SelectPlan />}
            {currentIndex === 2 && <PickAddOns />}
            {currentIndex === 3 && <FinishingUp />}
            {isConfirmed && <Confirmation />}
          </form>
        </div>
        {!isConfirmed && (
          <div className="absolute flex justify-between sm:relative bottom-0 p-4 bg-background-body w-full">
            {!isFirstStep && (
              <button
                className="btn bg-transparent text-text"
                type="button"
                onClick={goBackWard}
              >
                Go back
              </button>
            )}
            {!isLastStep ? (
              <button
                className="btn ml-auto"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  goForward();
                }}
              >
                Next Step
              </button>
            ) : (
              <button
                className="btn ml-auto bg-accent-checkbox"
                type="submit"
                form="form"
                onClick={(e) => {
                  e.preventDefault();
                  setConfirm();
                }}
              >
                Confirm
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
