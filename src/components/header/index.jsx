import { PhoneIcon } from '@heroicons/react/24/solid';

import logo from '../../assets/img/logo-rimac-v1.png';

export default function Index() {
  return (
    <header className="container mx-auto flex justify-between items-center px-6 py-4">
      <a title="Rimac">
        <img src={logo} alt="Rimac" />
      </a>
      <a
        href="tel:+01-411-6001"
        className="flex items-center justify-center text-base font-bold gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="pb-0.5">(01) 411 6001</span>
      </a>
    </header>
  );
}
