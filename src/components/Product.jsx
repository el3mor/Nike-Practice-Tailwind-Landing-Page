import { star } from '../assets/icons';
import PropTypes from 'prop-types';

const Product = ({product}) => {
  const {imgURL, name, price, rating} = product
  return (
    <div>
      <div className="bg-card bg-cover bg-center">
        <img src={imgURL} alt={name} className="w-full h-full" />
      </div>
      <div className='mt-5'>
        <div className='flex items-center gap-2 text-xl text-slate-gray'>
          <img src={star} alt="star" className="w-6 h-6" />
          <span>({rating})</span>
        </div>
        <h3 className='text-3xl my-2 dark:text-white-400  font-palanquin'>{name}</h3>
        <p className="text-2xl text-coral-red">{price}</p>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    imgURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string
  }).isRequired
}

export default Product
