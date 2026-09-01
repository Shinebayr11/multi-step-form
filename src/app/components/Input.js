const Input = ({ label, name, type = "text", value, inputValue, error }) => {
  const handleChange = (event) => {
    if (type === "file") {
      const file = event.target.files?.[0] ?? null;
      if (file && file.size > 5 * 1024 * 1024) {
        inputValue(null, name);
        return;
      }
      inputValue(file, name);
      return;
    }
    inputValue(event.target.value, name);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex gap-1 text-sm font-medium" htmlFor={name}>
        <span className="text-gray-800">{label ?? name}</span>
        <span className="text-rose-500">*</span>
      </label>

      <input
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={label ?? name}
        {...(type === "file" ? {} : { value: value ?? "" })}
        className={`w-full border px-3 py-2.5 rounded-md text-gray-900 placeholder-gray-400 outline-none transition-all ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-white focus:border-gray-400"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />

      {type === "file" && value?.name && (
        <p className="text-xs text-gray-600 mt-1">
          ✓ {value.name} ({(value.size / 1024).toFixed(2)} KB)
        </p>
      )}

      {error && (
        <p className="text-red-600 text-xs font-medium mt-1" id={`${name}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
