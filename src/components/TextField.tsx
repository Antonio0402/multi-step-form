import clsx from "clsx";
import { FormItems } from "../store";

const TextField = ({
  field,
  fieldName,
  setFormItems,
  type,
  labelText,
  placeholder,
}: {
  field: string;
  fieldName: string;
  setFormItems: (field: Partial<FormItems>) => void;
  type: string;
  labelText: string;
  placeholder: string;
}) => {
  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <label className="text-content text-text" htmlFor={fieldName}>
          {labelText}
        </label>
        <p
          className={clsx(
            "hidden sm:visible sm:block text-error text-content",
            {
              "sm:invisible": field,
            }
          )}
        >
          This field is required
        </p>
      </div>
      <input
        id={fieldName}
        name={fieldName}
        type={type}
        value={field}
        required
        onChange={(e) => setFormItems({ [fieldName]: e.target.value })}
        autoFocus
        autoComplete="name"
        placeholder={placeholder}
        className="placeholder:text-body font-medium text-number py-3 px-4 w-full border border-border focus:border-border-active rounded-xl invalid:border-error"
      />
    </div>
  );
};

export default TextField;
