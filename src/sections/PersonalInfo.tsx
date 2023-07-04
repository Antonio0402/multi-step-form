import Heading from "../components/Heading";
import { useFormActions, useFormData } from "../store";
import TextField from "../components/TextField";

const PersonalInfo = () => {
  const formData = useFormData();
  const { setFormItems } = useFormActions();
  const { name, email, phone } = formData;
  return (
    <div className="grid">
      <Heading
        head="Personal info"
        subhead="Please provide your name, email address, and phone number."
      />
      <div className="grid gap-6 w-full">
        <TextField
          field={name}
          fieldName="name"
          setFormItems={setFormItems}
          type="text"
          labelText="Name"
          placeholder="e.g. Stephen Kinge.g. stephenking@lorem.com"
        />
        <TextField
          field={email}
          fieldName="email"
          setFormItems={setFormItems}
          type="email"
          labelText="Email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <TextField
          field={phone}
          fieldName="phone"
          setFormItems={setFormItems}
          type="tel"
          labelText="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
