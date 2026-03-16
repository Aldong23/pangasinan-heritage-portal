"use client";

export default function Switch({
  checked,
  onChange,
  disabled = false,
  className = "",
  ...props
}) {
  const handleToggle = () => {
    if (disabled) return;
    onChange && onChange(!checked);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        relative inline-flex items-center h-6 w-11 rounded-full transition-colors
        bg-cyan-800 dark:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-700
        ${checked ? "bg-cyan-700 dark:bg-cyan-300" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      <span
        className={`
          inline-block w-4 h-4 transform bg-white rounded-full shadow ring-0 transition-transform
          ${checked ? "translate-x-5" : "translate-x-1"}
        `}
      />
    </button>
  );
}
