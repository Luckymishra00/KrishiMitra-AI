/**
 * Input Component
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium dark:text-white">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          p-3
          rounded-lg
          border
          border-gray-300
          bg-white
          text-black
          placeholder-gray-500
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
          dark:bg-slate-800
          dark:text-white
          dark:placeholder-gray-400
          dark:border-slate-600
        "
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}