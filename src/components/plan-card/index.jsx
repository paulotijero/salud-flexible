import PropTypes from 'prop-types';

const PlanCard = ({ name, price, description, recommended, originalCost }) => {
  const badge = recommended ? (
    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 last:mr-0 mr-1">
      Plan recomendado
    </span>
  ) : null;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {badge}
      <div className="p-5">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <p className="text-gray-500 text-sm line-through">{originalCost}</p>
        <p className="text-gray-900 text-lg font-semibold">{price} al mes</p>
        <div className="my-4">
          {description.map((feature, index) => (
            <div key={index} className="flex items-center mt-2">
              <span className="text-gray-700 dark:text-gray-400">
                {feature}
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Seleccionar Plan
        </button>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.integer,
  description: PropTypes.string,
  recommended: PropTypes.string,
  originalCost: PropTypes.string,
};

export default PlanCard;
