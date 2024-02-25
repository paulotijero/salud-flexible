import { useState } from 'react';

import Footer from '../../components/footer';
import OptionCard from '../../components/option-card';
import BackButton from '../../components/back-button';
import Breadcrumbs from '../../components/breadcrumbs';

export default function Index() {
  const [selectedOption, setSelectedOption] = useState('option1'); // El valor predeterminado puede ser cualquier opción

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Breadcrumbs />
      <div className="bg-gray-100 p-6">
        <BackButton />
        <h2 className="text-2xl font-semibold mb-4">
          Rocío ¿Para quién deseas cotizar?
        </h2>
        <p className="text-gray-700 mb-6">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
        <div className="space-y-4">
          <OptionCard
            title="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            icon="🧑"
            name="insuranceOption"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleSelectOption}
          />
          <OptionCard
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            icon="👩‍👦"
            name="insuranceOption"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleSelectOption}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
