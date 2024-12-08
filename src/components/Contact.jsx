import Button from "./Button"
import { FaArrowRight } from "react-icons/fa6";


const Contact = () => {
  return (
    <section className="mx-auto container mt-8 md:mt-16">
      <section id="contact-us" className="xl:padding-l wide:padding-r flex flex-col max-lg:gap-10 max-lg:text-center lg:flex-row justify-between items-center">
        <div>
          <h2 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-lg dark:text-gray-400">
          Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
          </h2>
        </div>
        <div className="flex w-full items-center justify-between rounded-full border border-slate-gray p-1.5 sm:p-2.5 lg:max-w-[40%]">
          <input type="email" placeholder="subscribe@nike.com" className="w-80 h-12 rounded-l-lg focus:outline-none bg-transparent p-2 dark:text-white" />
          <Button classes="flex flex-row justify-center items-center">
      Shop Now
      <FaArrowRight className="inline-block w-5 h-5 ml-2 text-coral-red p-1 bg-white rounded-full" />
      </Button>
        </div>
      </section>
    </section>
  )
}

export default Contact
