// import Input from "./Input";

// const Step2 = ({ inputValue, erros }) => {
//   return (
//     <div>
//       <Input name="email" type="email" inputValue={inputValue} error={errors?.email} />
//       <Input name="phonenumber" type="number" inputValue={inputValue} />
//       <Input name="password" type="password" inputValue={inputValue} />
//       <Input name="confirmPassword" type="password" inputValue={inputValue} />
//     </div>
//   );
// };
// export default Step2;
import Input from "./Input";

const Step2 = ({ inputValue, errors }) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        name="email"
        type="email"
        inputValue={inputValue}
        error={errors?.email}
      />
      <Input
        name="phonenumber"
        type="text"
        inputValue={inputValue}
        error={errors?.phonenumber}
      />
      <Input
        name="password"
        type="password"
        inputValue={inputValue}
        error={errors?.name}
      />
      <Input
        name="confirmPassword"
        type="password"
        inputValue={inputValue}
        error={errors?.name}
      />
    </div>
  );
};

export default Step2;
