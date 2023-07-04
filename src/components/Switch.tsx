import { FormItems } from "../store";

type SwitchProps = {
  checkedValue: boolean;
  setFormItems: (field: Partial<FormItems>) => void;
  leftLabel: string;
  rightLabel: string;
  name: string;
};

const Switch = ({
  checkedValue,
  setFormItems,
  leftLabel,
  rightLabel,
  name,
}: SwitchProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checkedValue}
        onChange={(e) => setFormItems({ [name]: e.target.checked })}
        className="sr-only peer"
      />
      <span className="text-sm font-bold text-text peer-checked:text-text-number">
        {leftLabel}
      </span>
      <label
        htmlFor="isYearly"
        className="relative grid place-items-center h-5 w-8 bg-fill-btn rounded-full before:content-[''] before:absolute before:w-3 before:h-3 before:left-1 before:bg-white before:rounded-full peer-checked:before:translate-x-full before:transition-transform duration-75 ease-in-out cursor-pointer"
      />
      <span className="text-sm font-bold text-text-number peer-checked:text-text">
        {rightLabel}
      </span>
    </>
  );
};

export default Switch;
