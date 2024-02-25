import { useAuth } from '../../contexts/auth-context';

function BackButton() {
  const { logout } = useAuth();
  return (
    <button
      onClick={() => logout()}
      className="flex items-center px-4 py-2 bg-white text-gray-800 font-semibold border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2 -ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Volver
    </button>
  );
}

export default BackButton;
