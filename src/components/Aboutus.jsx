import Button from "./Button"
import { shoe8 } from "../assets/images"
const Aboutus = () => {
  return (
    <section id="about-us" className='container mx-auto mt-16 md:mt-32'>
      <section className="flex w-full items-center justify-between gap-10 max-lg:flex-col max-lg:px-16">
        <div className="flex flex-col flex-1">
          <h2 className="text-4xl font-bold capitalize dark:text-gray-300">
          We provide you <span className="text-coral-red">super </span><br/><span className="text-coral-red">quality</span> Shoes
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-gray dark:text-white-400">
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your 
            experience, providing you with unmatched quality,superior support and durability,innovation, and a touch of elegance.
          </p>
          <p className="my-10 max-w-2xl text-base text-slate-gray dark:text-white-400">
          Our dedication to detail and excellence ensures your satisfaction
          </p>
          <Button>
            View Details
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src={shoe8} alt="shoe" className="animate-pulse" />
        </div>
      </section>
    </section>
  )
}

export default Aboutus
