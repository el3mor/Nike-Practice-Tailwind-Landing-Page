import {offer} from '../assets/images'
import Button from './Button'
import { FaArrowRight } from "react-icons/fa6";
const Offer = () => {
  return (
    <section className="mx-auto container mt-16 p-5 md:mt-32">
      <section className="flex flex-col-reverse md:flex-row gap-10">
        <div className=''>
          <img src={offer} alt="offer" className="w-full" />
        </div>
        <div className='flex justify-center  flex-col '>
          <h2 className="text-4xl font-bold text-coral-red font-palanquin">
          Special <span className='text-black dark:text-gray-300'>Offer</span>
          </h2>
          <p className="mt-4 text-slate-gray lg:max-w-xl dark:text-gray-200">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier quality to superior comfort, we have it all.We offer a wide range of products to suit your needs.
          </p>
          <p className='mt-6 text-slate-gray lg:max-w-xl dark:text-gray-200'>
          Navigate a realm of style, comfort, and innovation with our exclusive offers.Your journey to a world of comfort and style begins here.
          </p>
          <div className='mt-12 flex gap-5'>
          <Button classes={"flex  items-center "}>
            Shop Now
            <FaArrowRight className="inline-block w-5 h-5 ml-2 text-coral-red p-1 bg-white rounded-full" />
          </Button>
          <button className='ring-black ring-1 p-4 rounded-full dark:ring-white text-lg dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-300'>
            View details
          </button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Offer
