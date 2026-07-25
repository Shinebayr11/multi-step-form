import Input from "./Input";

const Step3 = ({ values, inputValue, errors }) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Date of birth"
        name="dateOfBirth"
        type="date"
        value={values.dateOfBirth}
        inputValue={inputValue}
        error={errors.dateOfBirth}
      />

      <Input
        label="Profile image"
        name="profileImage"
        type="file"
        value={values.profileImage}
        inputValue={inputValue}
        error={errors.profileImage}
      />
    </div>
  );
};

export default Step3;
