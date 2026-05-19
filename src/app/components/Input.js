const Input = ({ name, type, inputValue, error }) => {
  const handleOnclick = (event) => {
    inputValue(event.target.value, name);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="flex gap-1">
        <h1 className="text-black">{name}</h1>
        <span className="text-2xl text-rose-500">*</span>
      </label>

      <input
        onChange={handleOnclick}
        className={`w-full border-2 p-2 rounded-md text-black outline-none ${
          error ? "border-red-500" : "border-[#CBD5E1]"
        }`}
        type={type}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
