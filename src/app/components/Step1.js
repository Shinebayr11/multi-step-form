import Input from "./Input";

const Step1 = ({ values, inputValue, errors }) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Firstname"
        name="firstname"
        type="text"
        value={values.firstname}
        inputValue={inputValue}
        error={errors.firstname}
      />

      <Input
        label="Lastname"
        name="lastname"
        type="text"
        value={values.lastname}
        inputValue={inputValue}
        error={errors.lastname}
      />

      <Input
        label="Username"
        name="username"
        type="text"
        value={values.username}
        inputValue={inputValue}
        error={errors.username}
      />
    </div>
  );
};

export default Step1;
