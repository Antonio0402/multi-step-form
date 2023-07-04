import Heading from "../components/Heading";
import { useFormActions, useFormData } from "../store";
import { planOptions } from "../data";
import AddonListItem from "../components/AddonListItem";

const PickAddOns = () => {
  const formData = useFormData();
  const { isOnlineService, isLargerStorage, isCustomizableProfile, isYearly } =
    formData;
  const { setFormItems } = useFormActions();
  return (
    <div className="grid">
      <Heading
        head="Pick add-ons"
        subhead="Add-ons help enhance your gaming experience."
      />
      <div className="grid gap-3.5">
        <AddonListItem
          checkedValue={isOnlineService}
          setFormItems={setFormItems}
          isYearly={isYearly}
          optionName="onlineServices"
          headText="Online service"
          subHeadText="Access to multiplayer games"
          fieldName="isOnlineService"
        />
        <AddonListItem
          checkedValue={isLargerStorage}
          setFormItems={setFormItems}
          isYearly={isYearly}
          optionName="largerStorage"
          headText="Larger storage"
          subHeadText="Extra 1TB of cloud save"
          fieldName="isLargerStorage"
        />
        <AddonListItem
          checkedValue={isCustomizableProfile}
          setFormItems={setFormItems}
          isYearly={isYearly}
          optionName="customizableProfile"
          headText="Customizable Profile"
          subHeadText="Custom theme on your profile"
          fieldName="isCustomizableProfile"
        />
      </div>
    </div>
  );
};

export default PickAddOns;
