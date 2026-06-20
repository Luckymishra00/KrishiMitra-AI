/**
 * Button Component
 * Props:
 * variant: primary | secondary | outline
 * size: sm | md | lg
 * disabled: boolean
 * onClick: function
 */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-green-700 text-white",
    secondary: "bg-gray-700 text-white",
    outline: "border border-green-700 text-green-700",
  };

  const sizes = {
    sm: "px-3 py-1",
    md: "px-5 py-2",
    lg: "px-7 py-3",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} rounded-lg`}
    >
      {children}
    </button>
  );
}