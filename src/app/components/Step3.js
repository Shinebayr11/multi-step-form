import Input from "./Input";

const Step3 = ({ inputValue }) => {
  return (
    <div>
      <Input name="Date of birth" type="date" inputValue={inputValue} />
      <Input name="Profile image" type="file" inputValue={inputValue} />
    </div>
  );
};
export default Step3;
