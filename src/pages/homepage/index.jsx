import Header from '../../components/header';
import Footer from '../../components/footer';
import family from '../../assets/img/family.png';

import { useAuth } from '../../contexts/auth-context';

export default function Index() {
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const { dni, celular } = event.target.elements;

    const credentials = {
      user: {
        dni: dni.value,
        celular: celular.value,
      },
    };

    login(credentials);
  }

  return (
    <>
      <Header />

      <div className="container mx-auto px-6 py-4 space-y-6">
        <div className="flex justify-between items-center gap-1">
          <div className="w-7/12 space-y-2">
            <span className="bg-emerald-400 px-2.5 py-0.5 rounded-md font-bold text-sm">
              Seguro Salud Flexible
            </span>
            <h3 className="font-bold text-3xl">Creado para ti y tu familia</h3>
          </div>
          <div className="w-5/12 h-40">
            <img
              className="object-fill h-full rounded-3xl"
              src={family}
              alt="Rimac Family"
            />
          </div>
        </div>

        <hr className="border-t-1 border-gray-30" />

        <p className="font-bold text-sm">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría, 100% online.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <select className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2">
                  <option>DNI</option>
                  {/* ... otras opciones ... */}
                </select>
              </div>
              <div className="relative border-2 border-gray-400 rounded-lg shadow-sm">
                <input
                  type="number"
                  id="dni"
                  name="dni"
                  placeholder=" "
                  className="block p-4 pl-4 pt-6 pb-1 w-full text-md font-semibold text-gray-800 bg-transparent rounded-lg appearance-none"
                />
                <label
                  htmlFor="dni"
                  className="absolute left-4 top-1 text-sm font-normal text-gray-400 transition-all pointer-events-none"
                >
                  Nro. de documento
                </label>
              </div>
            </div>

            <div className="relative border-2 border-gray-400 rounded-lg shadow-sm">
              <input
                type="number"
                id="celular"
                name="celular"
                placeholder=" "
                className="block p-4 pl-4 pt-6 pb-1 w-full text-md font-semibold text-gray-800 bg-transparent rounded-lg appearance-none"
              />
              <label
                htmlFor="celular"
                className="absolute left-4 top-1 text-sm font-normal text-gray-400 transition-all pointer-events-none"
              >
                Celular
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center font-semibold">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 rounded"
                />
                <span className="ml-2">Acepto la Política de Privacidad</span>
              </label>
              <label className="flex items-center font-semibold">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 rounded"
                />
                <span className="ml-2">
                  Acepto la Política Comunicaciones Comerciales
                </span>
              </label>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="text-sm underline font-bold text-gray-600">
            Aplican Términos y Condiciones.
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold text-xl py-4 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cotiza aquí
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
