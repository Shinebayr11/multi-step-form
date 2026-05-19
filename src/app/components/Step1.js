import Input from "./Input";

const Step1 = ({ inputValue, errors }) => {
  return (
    <div className="flex flex-col gap-37 justify-between">
      <div className="flex flex-col gap-4">
        <Input
          name="firstname"
          inputValue={inputValue}
          error={errors.firstname}
        />

        <Input
          name="lastname"
          inputValue={inputValue}
          error={errors.lastname}
        />

        <Input
          name="username"
          inputValue={inputValue}
          error={errors.username}
        />
      </div>
    </div>
  );
};

export default Step1;
