import { useState } from "react";

const Success = ({ data, onReset }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center h-full">
      <img className="w-[60px] h-[60px]" src="/logo.svg" alt="logo" />

      <h1 className="text-3xl font-bold text-black">You&apos;re all set!🎉</h1>

      <p className="text-[#8E8E8E]">
        We have received your submission. Thank you!
      </p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 text-sm text-blue-600 underline hover:text-blue-800"
      >
        {showDetails ? "Hide" : "View"} submitted details
      </button>

      {showDetails && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-left text-sm max-h-40 overflow-y-auto w-full">
          <p><strong>Name:</strong> {data.firstname} {data.lastname}</p>
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phonenumber}</p>
          <p><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
          {data.profileImage?.name && (
            <p><strong>Profile Image:</strong> {data.profileImage.name}</p>
          )}
        </div>
      )}

      <button
        onClick={onReset}
        className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        aria-label="Start new submission"
      >
        Submit Another Form
      </button>
    </div>
  );
};

export default Success;
