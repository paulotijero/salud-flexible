import { useAuth } from '../../contexts/auth-context';

function BackButton() {
  const { logout } = useAuth();
  return (
    <button
      onClick={() => logout()}
      className="flex items-center mb-4 text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
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
