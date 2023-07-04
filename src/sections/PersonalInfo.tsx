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
        />
        <TextField
          field={email}
          fieldName="email"
          setFormItems={setFormItems}
          type="email"
          labelText="Email"
        />
        <TextField
          field={phone}
          fieldName="phone"
          setFormItems={setFormItems}
          type="tel"
          labelText="Phone Number"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
