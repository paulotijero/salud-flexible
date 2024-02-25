import { useLocation } from 'react-router';

const steps = [
  { name: 'Planes y coberturas', path: '/plans' },
  { name: 'Resumen', path: '/summary' },
];

function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {steps.map((step, stepIdx) => (
          <li key={step.name}>
            <div className="flex items-center">
              <span
                className={`flex items-center text-sm font-medium ${step.path == location.pathname ? 'text-blue-600' : 'text-gray-500'}`}
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 border-blue-600 rounded-full">
                  {stepIdx + 1}
                </span>
                <span className="ml-4">{step.name}</span>
              </span>
              {stepIdx !== steps.length - 1 && (
                <svg
                  className="flex-shrink-0 mx-2 h-5 w-5 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
