import { planOptions } from "../data";
import { FormItems } from "../store";

type PlanCardProps = {
  plan: "" | "Arcade" | "Advanced" | "Pro";
  setFormItems: (field: Partial<FormItems>) => void;
  isYearly: boolean;
  nameField: "Arcade" | "Advanced" | "Pro";
};

const PlanCard = ({
  plan,
  setFormItems,
  isYearly,
  nameField,
}: PlanCardProps) => {
  return (
    <div className="grid gap-3">
      <input
        id={nameField}
        name={nameField}
        type="radio"
        checked={plan === nameField}
        onChange={() => setFormItems({ plan: nameField })}
        className="sr-only peer"
      />
      <label
        className="text-base flex sm:flex-col sm:justify-between gap-3.5 sm:gap-10 p-4 w-full border border-border peer-hover:border-border-active peer-checked:border-border-active peer-checked:bg-accent-active/10 rounded-xl hover:cursor-pointer"
        htmlFor={nameField}
      >
        <img
          src={`./images/icon-${nameField.toLowerCase()}.svg`}
          alt={`icon ${nameField.toLowerCase()}`}
          className="max-w-fit"
        />
        <div>
          <p className="text-base font-medium text-text">{nameField}</p>
          <p className="text-sm text-text-number">
            {`$
        ${
          !isYearly
            ? planOptions[nameField].monthly
            : planOptions[nameField].yearly
        }/${!isYearly ? "mo" : "yr"}`}
          </p>
        </div>
      </label>
    </div>
  );
};

export default PlanCard;
