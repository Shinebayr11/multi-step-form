const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <img
        className="w-15 h-15"
        src="/logo.svg"
        alt="Multi-step form logo"
        loading="eager"
      />
      <h1 className="text-3xl font-bold text-black">Join Us!😎</h1>
      <p className="text-gray-500 text-sm">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
export default Header;
