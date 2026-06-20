/**
 * Toast Component
 * Props:
 * message
 */

export default function Toast({ message }) {
  return (
    <div className="fixed top-5 right-5 bg-green-700 text-white px-4 py-3 rounded shadow-lg">
      {message}
    </div>
  );
}