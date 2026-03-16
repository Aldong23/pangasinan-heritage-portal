export default function TableData({ children, className = "", ...props }) {
  return (
    <td
      {...props}
      className={`px-4 py-3 text-sm text-gray-600 dark:text-gray-200 whitespace-nowrap ${className}`}
    >
      {children}
    </td>
  );
}
