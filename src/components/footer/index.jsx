import logo from '../../assets/img/logo-rimac-v2.png';

export default function Index() {
  return (
    <footer className="container mx-auto flex flex-col space-y-6 bg-gray-800 px-6 py-9 mt-16">
      <a title="Rimac" className="self-center">
        <img src={logo} alt="Rimac" />
      </a>

      <hr className="border-t-1 border-gray-700" />

      <span className="text-sm text-white font-normal self-center">
        © 2023 RIMAC Seguros y Reaseguros.
      </span>
    </footer>
  );
}
