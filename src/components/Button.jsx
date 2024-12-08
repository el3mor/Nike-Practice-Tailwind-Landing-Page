

import PropTypes from 'prop-types';

const Button = ({
  children,
  classes
}) => {
  return (
    <button className={`${classes ? classes : ""} w-fit bg-coral-red py-4 px-7 text-white hover:bg-white hover:text-coral-red border-coral-red  border transition-colors duration-300 rounded-full`}>
      {children}
    </button>
  )}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string
};

export default Button


