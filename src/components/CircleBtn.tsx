import { useStepActions } from "../store";

const CircleBtn = ({
  currentIndex,
  idx,
}: {
  currentIndex: number;
  idx: number;
}) => {
  const { goToSection } = useStepActions();
  return (
    <button
      type="button"
      aria-label="step button"
      className="border border-white grid place-items-center text-btn text-sm font-bold text-white aria-selected:bg-accent-circle-btn aria-selected:text-text w-9 h-9 rounded-full"
      aria-selected={currentIndex === idx}
      onClick={() => goToSection(idx)}
    >
      {idx + 1}
    </button>
  );
};

export default CircleBtn;
