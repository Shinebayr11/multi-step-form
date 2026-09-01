"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
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
      .refine((file) => file instanceof File, "Profile image required")
      .refine(
        (file) => file instanceof File && file.size <= 5 * 1024 * 1024,
        "File size must be less than 5MB"
      )
      .refine(
        (file) =>
          file instanceof File &&
          ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
            file.type
          ),
        "Only JPEG, PNG, GIF, and WebP images are allowed"
      ),
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
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    const savedStep = localStorage.getItem("currentStep");

    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("currentStep", currentStep.toString());
    }
  }, [currentStep, isLoaded]);

  const isDone = currentStep >= steps.length;
  const StepComponent = steps[currentStep];

  const updateFormField = (value, key) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleOnclick = () => {
    const result = stepSchemas[currentStep].safeParse(formData);

    if (!result.success) {
      const newErrors = {};

      result.error.issues.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });

      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCurrentStep(currentStep + 1);
  };

  const handleBackclick = () => {
    if (currentStep === 0) return;

    setErrors({});
    setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setFormData(emptyForm);
    setErrors({});
    setCurrentStep(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="flex w-full max-w-md p-8 flex-col gap-6 bg-white rounded-lg shadow-md justify-between">
        {isDone ? (
          <Success data={formData} onReset={handleReset} />
        ) : (
          <>
            <div className="flex flex-col gap-6 flex-1">
              <Header />
              <StepComponent
                values={formData}
                inputValue={updateFormField}
                errors={errors}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleBackclick}
                disabled={currentStep === 0}
                className="flex-1 px-4 py-2.5 border-2 border-gray-800 text-gray-800 font-medium rounded-md disabled:opacity-40 disabled:cursor-not-allowed disabled:border-gray-400 hover:bg-gray-100 transition-colors"
                aria-label="Go to previous step"
              >
                Back
              </button>

              <button
                onClick={handleOnclick}
                className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 bg-black text-white font-medium rounded-md hover:bg-gray-900 transition-colors"
                aria-label={`Continue to step ${currentStep + 2} of ${steps.length}`}
              >
                Continue {currentStep + 1}/{steps.length}
                <span className="text-lg">›</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
