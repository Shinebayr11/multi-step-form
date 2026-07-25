"use client";

import * as z from "zod";
import { useState } from "react";
import Header from "./components/Header";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";

const steps = [Step1, Step2, Step3];

const stepSchemas = [
  z.object({
    firstname: z.string().min(1, "Firstname required"),
    lastname: z.string().min(1, "Lastname required"),
    username: z.string().min(4, "Too Short"),
  }),

  z
    .object({
      email: z.email("Invalid email"),
      phonenumber: z.string().min(1, "Phone required"),
      password: z.string().min(6, "Too short"),
      confirmPassword: z.string().min(1, "Confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),

  z.object({
    dateOfBirth: z.string().min(1, "Date of birth required"),
    profileImage: z
      .any()
      .refine((file) => file instanceof File, "Profile image required"),
  }),
];

const emptyForm = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  phonenumber: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  profileImage: null,
};

export default function Home() {
  const [items, setItems] = useState(0);
  const [utga, setUtga] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const isDone = items >= steps.length;
  const StepComponent = steps[items];

  const inputValue = (inputValuecontent, key) => {
    setUtga((prev) => ({ ...prev, [key]: inputValuecontent }));
  };

  const handleOnclick = () => {
    const result = stepSchemas[items].safeParse(utga);

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

  const handleBackclick = () => {
    if (items === 0) return;

    setErrors({});
    setItems(items - 1);
  };

  const handleReset = () => {
    setUtga(emptyForm);
    setErrors({});
    setItems(0);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-[480px] h-[655px] p-8 flex-col gap-4 bg-white justify-between">
        {isDone ? (
          <Success data={utga} onReset={handleReset} />
        ) : (
          <>
            <div className="flex flex-col gap-4 justify-between">
              <Header />
              <StepComponent
                values={utga}
                inputValue={inputValue}
                errors={errors}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleBackclick}
                disabled={items === 0}
                className="w-1/3 border-2 text-black rounded-md disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Back
              </button>

              <button
                onClick={handleOnclick}
                className="flex items-center justify-center w-2/3 h-10 bg-black text-white text-xl rounded-md"
              >
                {items + 1}/{steps.length} Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
