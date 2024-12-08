import { products } from '../constants '
import Product from './Product'

const Products = () => {
  return (
    <section className='mx-auto container mt-32 md:mt-52'>
      <section className="px-4 max-sm:mt-12" id="products">
        <div className="flex flex-col justify-start gap-4 sm:max-w-lg ">
          <h2 className='text-4xl font-bold text-coral-red'><span className="text-black dark:text-gray-300">Our</span> Popular Products</h2>
          <p className="text-slate-gray dark:text-white">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 wide:grid-cols-4 max-md:px-5 gap-20 mt-14">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Products
