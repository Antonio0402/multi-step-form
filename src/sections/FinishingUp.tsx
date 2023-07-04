import Heading from "../components/Heading";
import { useFormActions, useFormData } from "../store";
import { planOptions } from "../data";

const FinishingUp = () => {
  const formData = useFormData();
  const {
    plan,
    isOnlineService,
    isLargerStorage,
    isCustomizableProfile,
    isYearly,
  } = formData;

  const { setFormItems } = useFormActions();

  let plantTotal = 0;
  if (plan) {
    plantTotal = isYearly
      ? planOptions[plan].yearly
      : planOptions[plan].monthly;
  }

  const addOnTotal = [
    isOnlineService,
    isLargerStorage,
    isCustomizableProfile,
  ].reduce((total, value, index) => {
    if (!value) return total;
    const name = ["customizableProfile", "largerStorage", "onlineServices"][
      index
    ] as keyof typeof planOptions;
    const planName = isYearly ? "yearly" : "monthly";
    const addOnValue = planOptions[name][planName];
    return total + addOnValue;
  }, 0);

  return (
    <div className="grid">
      <Heading
        head="Finishing up"
        subhead="Double-check everything looks OK before confirming."
      />
      <div className="grid bg-accent-active/10 gap-4 px-4 py-5 rounded-xl w-full">
        {plan && (
          <div className="flex justify-between">
            <div>
              <p className="text-body text-text">
                {plan} {isYearly ? "(Yearly)" : "(Monthly)"}
              </p>
              <button
                type="button"
                className="text-sm text-medium text-text-number underline underline-offset-2 decoration-2 hover:text-accent-checkbox"
                onClick={() => setFormItems({ isYearly: !isYearly })}
              >
                Change
              </button>
            </div>
            <p className="text-text text-body">
              {`$${
                !isYearly ? planOptions[plan].monthly : planOptions[plan].yearly
              }/${!isYearly ? "mo" : "yr"}`}
            </p>
          </div>
        )}
        <div className="h-px w-full mx-auto bg-text-number/20" />
        {isOnlineService && (
          <div className="flex justify-between">
            <p className="text-body text-text-number">Online Service</p>
            <p className="text-text text-sm">
              {`+$${
                !isYearly
                  ? planOptions.onlineServices.monthly
                  : planOptions.onlineServices.yearly
              }/${!isYearly ? "mo" : "yr"}`}
            </p>
          </div>
        )}
        {isCustomizableProfile && (
          <div className="flex justify-between">
            <p className="text-text-number text-body">Customizable Profile</p>
            <p className="text-text text-sm">
              {`+$${
                !isYearly
                  ? planOptions.customizableProfile.monthly
                  : planOptions.customizableProfile.yearly
              }/${!isYearly ? "mo" : "yr"}`}
            </p>
          </div>
        )}
        {isLargerStorage && (
          <div className="flex justify-between">
            <p className="text-text-number text-body">Larger Storage</p>
            <p className="text-sm text-text">
              {`+$${
                !isYearly
                  ? planOptions.largerStorage.monthly
                  : planOptions.largerStorage.yearly
              }/${!isYearly ? "mo" : "yr"}`}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-6 px-4">
        <p className="text-sm font-medium text-text">Total (per year)</p>
        <p className="text-number-total font-medium text-text-active-number">
          +${plantTotal + addOnTotal}/{isYearly ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
};

export default FinishingUp;
