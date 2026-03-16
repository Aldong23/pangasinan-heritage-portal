export default function Checkbox({ className = "", ...props }) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        `rounded border-gray-300 text-cyan-800 shadow-sm focus:ring-cyan-700
         dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-cyan-400 dark:checked:border-cyan-400 dark:focus:ring-cyan-300
        ` + className
      }
    />
  );
}
