import BackButton from '../../components/back-button';
import Breadcrumbs from '../../components/breadcrumbs';

export default function Index() {
  return (
    <>
      <Breadcrumbs />
      <div className="p-4 bg-white max-w-sm mx-auto rounded-lg shadow">
        <BackButton />

        <h2 className="text-xl font-bold mb-4">Resumen del seguro</h2>

        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-semibold mb-2">
            PRECIOS CALCULADOS PARA:
          </h3>
          <p className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0 1.657-4 5-4 5s4-3.343 4-5a4 4 0 114-4v4m0 0c0 1.657 4 5 4 5s-4-3.343-4-5z"
              />
            </svg>
            Rocio Miranda Díaz
          </p>
          <hr className="my-3 border-gray-300" />
          <div className="text-gray-700">
            <div className="mb-3">
              <h4 className="font-medium">Responsable de pago</h4>
              <p>DNI: 444888888</p>
              <p>Celular: 5130216147</p>
            </div>
            <div>
              <h4 className="font-medium">Plan elegido</h4>
              <p>Plan en Casa y Clínica</p>
              <p>Costo del Plan: $99 al mes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
