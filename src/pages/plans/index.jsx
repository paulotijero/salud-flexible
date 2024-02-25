import { useState } from 'react';

import Footer from '../../components/footer';
import OptionCard from '../../components/option-card';
import BackButton from '../../components/back-button';
import Breadcrumbs from '../../components/breadcrumbs';
import PlanCard from '../../components/plan-card';

export default function Index() {
  const [selectedOption, setSelectedOption] = useState(); // El valor predeterminado puede ser cualquier opción

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

      {selectedOption && (
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          {plansData.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

const plansData = [
  {
    name: 'Plan en Casa',
    price: 39,
    description: [
      'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
      'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
      'Indemnización de S/300 en caso de hospitalización por más de un día.',
    ],
    age: 60,
  },
  {
    name: 'Plan en Casa y Clínica',
    price: 99,
    description: [
      'Consultas en clínica para cualquier especialidad.',
      'Medicinas y exámenes derivados cubiertos al 80%.',
      'Atención médica en más de 200 clínicas del país.',
    ],
    age: 70,
  },
  {
    name: 'Plan en Casa + Bienestar',
    price: 70,
    description: [
      'Videoconsulta con especialistas de psicología y nutrición.',
      'Acceso a videos y recursos sobre bienestar.',
      'Incluye todos los beneficios del Plan en Casa.',
    ],
    age: 25,
  },
  {
    name: 'Plan en Casa + Chequeo ',
    price: 49,
    description: [
      'Un Chequeo preventivo general de manera presencial o virtual.',
      'Acceso a Vacunas en el Programa del MINSA en centros privados.',
      'Incluye todos los beneficios del Plan en Casa.',
    ],
    age: 90,
  },
  {
    name: 'Plan en Casa + Fitness',
    price: 45,
    description: [
      'Descuentos en más de 50 locales de gimnasio.',
      'Beneficios exclusivos en alimentos nutricionales y complementos.',
      'Incluye todos los beneficios del Plan en Casa.',
    ],
    age: 30,
  },
];
