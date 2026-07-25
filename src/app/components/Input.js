const Input = ({ label, name, type = "text", value, inputValue, error }) => {
  const handleChange = (event) => {
    if (type === "file") {
      inputValue(event.target.files?.[0] ?? null, name);
      return;
    }
    inputValue(event.target.value, name);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="flex gap-1" htmlFor={name}>
        <span className="text-black">{label ?? name}</span>
        <span className="text-2xl text-rose-500">*</span>
      </label>

      <input
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        {...(type === "file" ? {} : { value: value ?? "" })}
        className={`w-full border-2 p-2 rounded-md text-black outline-none ${
          error ? "border-red-500" : "border-[#CBD5E1]"
        }`}
      />

      {type === "file" && value?.name && (
        <p className="text-sm text-[#8E8E8E]">{value.name}</p>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
