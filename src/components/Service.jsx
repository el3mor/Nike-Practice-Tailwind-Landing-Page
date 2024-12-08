

import PropTypes from 'prop-types';

const Service = ({service}) => {
  const { imgURL, label, subtext } = service
  return (
    <div className="bg-white-400 shadow-3xl px-12 rounded-2xl py-16 sm:w-[350px] sm:min-w-[350px] dark:bg-gray-700">
      <img width="45px" className="p-2 block bg-coral-red rounded-full mb-5" src={imgURL} alt={label} />
      <h3 className="text-3xl font-bold mb-2 dark:text-white">{label}</h3>
      <p className="text-base text-slate-gray dark:text-gray-400">{subtext}</p>
    </div>
  )};
Service.propTypes = {
  service: PropTypes.shape({
    imgURL: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service

