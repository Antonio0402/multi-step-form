import { planOptions } from "../data";
import { FormItems } from "../store";

type AddonListProps = {
  checkedValue: boolean;
  setFormItems: (field: Partial<FormItems>) => void;
  isYearly: boolean;
  optionName: "onlineServices" | "largerStorage" | "customizableProfile";
  headText: string;
  subHeadText: string;
  fieldName: keyof FormItems;
};

const AddonListItem = ({
  checkedValue,
  setFormItems,
  isYearly,
  optionName,
  headText,
  subHeadText,
  fieldName,
}: AddonListProps) => {
  return (
    <div className="grid gap-3">
      <label
        className="text-base flex justify-between items-center sm:gap-10 p-4 w-full border border-border aria-checked:border-border-active aria-checked:bg-accent-active/10 rounded-xl hover:cursor-pointer"
        htmlFor={optionName}
        aria-checked={checkedValue}
      >
        <div className="flex gap-4 items-center">
          <input
            id={optionName}
            name={optionName}
            type="checkbox"
            checked={checkedValue}
            onChange={(e) => setFormItems({ [fieldName]: e.target.checked })}
            className="w-5 h-5 rounded border-border shadow-sm focus:border-accent-checkbox/30 focus:ring focus:ring-offset-0 focus:ring-accent-checkbox/20 text-accent-checkbox"
          />
          <div>
            <p className="text-body text-text">{headText}</p>
            <p className="text-body text-text-number">{subHeadText}</p>
          </div>
        </div>
        <p className="text-sm text-text-active-number font-medium">
          {`+$
            ${
              !isYearly
                ? planOptions[optionName].monthly
                : planOptions[optionName].yearly
            }/${!isYearly ? "mo" : "yr"}`}
        </p>
      </label>
    </div>
  );
};

export default AddonListItem;
