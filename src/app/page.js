"use client";

import * as z from "zod";
import { useState } from "react";
import Header from "./components/Header";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function Home() {
  const [items, setItems] = useState(0);
  const StepComponent = [Step1, Step2, Step3][items];
  const [utga, setUtga] = useState({});
  const handleOnclick = () => {
    const currentSchema = stepSchemas[items];

    const result = currentSchema.safeParse(utga);

    if (!result.success) {
      const newErrors = {};

      result.error.issues.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });

      setErrors(newErrors);

      return;
    }

    setErrors({});
    setItems(items + 1);
  };
  const handleBackclick = () => setItems(items - 1);
  const [errors, setErrors] = useState({});

  const inputValue = (inputValuecontent, key) => {
    setUtga({ ...utga, [key]: inputValuecontent });
  };

  const stepSchemas = [
    z.object({
      firstname: z.string().min(1, "Firstname required"),
      lastname: z.string().min(1, "Lastname required"),
      username: z.string().min(4, "Too Short"),
    }),

    z.object({
      email: z.email("Invalid email"),
      phonenumber: z.string().min(1, "Phone required"),
    }),

    z.object({
      password: z.string().min(6, "Too short"),
      confirmPassword: z.string(),
    }),
  ];
  console.log(utga);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-[480px] h-[655px] p-8 flex-col gap-4 bg-white justify-between">
        <div className="flex flex-col gap-4  justify-between">
          <Header />
          <StepComponent inputValue={inputValue} errors={errors} />
        </div>
        <div className="flex gap-2 ">
          <button
            onClick={handleBackclick}
            className="w-1/3 border-2 text-black rounded-md"
          >
            Back
          </button>
          <button
            onClick={handleOnclick}
            className="flex items-center justify-center w-2/3 h-10 bg-black text-white text-xl rounded-md"
          >
            {items + 1}/3 Continue
          </button>
        </div>
      </div>
    </div>
  );
}
