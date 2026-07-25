export const Success = ({ data, onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <img className="w-[60px] h-[60px]" src="/logo.svg" alt="logo" />

      <h1 className="text-3xl font-bold text-black">You&apos;re all set!🎉</h1>

      <p className="text-[#8E8E8E]">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};

export default Success;
