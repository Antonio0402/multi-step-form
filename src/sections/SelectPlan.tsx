import Heading from "../components/Heading";
import { useFormActions, useFormData } from "../store";
import Switch from "../components/Switch";
import PlanCard from "../components/PlanCard";

const SelectPlan = () => {
  const formData = useFormData();
  const { plan, isYearly } = formData;
  const { setFormItems } = useFormActions();
  return (
    <div className="grid">
      <Heading
        head="Select your plan"
        subhead="You have the option of monthly or yearly billing."
      />
      <div className="grid sm:grid-flow-col sm:auto-cols-[minmax(max-content,1fr)] gap-3.5">
        <PlanCard
          plan={plan}
          setFormItems={setFormItems}
          isYearly={isYearly}
          nameField="Arcade"
        />
        <PlanCard
          plan={plan}
          setFormItems={setFormItems}
          isYearly={isYearly}
          nameField="Advanced"
        />
        <PlanCard
          plan={plan}
          setFormItems={setFormItems}
          isYearly={isYearly}
          nameField="Pro"
        />
      </div>
      <div className="flex gap-2 justify-center items-center py-4 bg-accent-active/10 rounded-xl mt-6">
        <Switch
          checkedValue={isYearly}
          setFormItems={setFormItems}
          leftLabel="Monthly"
          rightLabel="Yearly"
          name="isYearly"
        />
      </div>
    </div>
  );
};

export default SelectPlan;
