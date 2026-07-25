import Input from "./Input";

const Step2 = ({ values, inputValue, errors }) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Email"
        name="email"
        type="email"
        value={values.email}
        inputValue={inputValue}
        error={errors.email}
      />

      <Input
        label="Phone number"
        name="phonenumber"
        type="tel"
        value={values.phonenumber}
        inputValue={inputValue}
        error={errors.phonenumber}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={values.password}
        inputValue={inputValue}
        error={errors.password}
      />

      <Input
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        inputValue={inputValue}
        error={errors.confirmPassword}
      />
    </div>
  );
};

export default Step2;
