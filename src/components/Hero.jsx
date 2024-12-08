import { useState } from "react";
import { thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images"
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { shoes } from "../constants ";
import { statistics } from "../constants ";


const Hero = () => {
  const [chooseShoe, setChooseShoe] = useState(thumbnailShoe1);
  
  return (
    <section id="home" className="container m-auto flex flex-col wide:flex-row max-wide:mt-24  items-center gap-10 justify-between  ">
     <div className="relative flex flex-col xl:w-2/5 max-md:px-5">
      <p className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text font-palanquin text-xl text-transparent">
      Our Summer Collection
      </p>
      <h1 className="mt-8 text-8xl  max-sm:text-[62px] max-sm:leading-[82px] font-bold font-sens dark:text-gray-300">
      <span className="from-gray-300 md:whitespace-nowrap xl:relative z-10 rounded-r-full pr-3 bg-white dark:bg-gray-800 ">The New Arrival</span>
      <br/>
      <span className="inline-block animate-pulse bg-gradient-to-r from-coral-red to-pink-400 bg-clip-text text-transparent md:mt-3">Nike</span> Shoes
      </h1>
      <p className="text-lg text-slate-gray dark:text-white-400 mt-4 sm:max-w-sm leading-7 font-semibold">
      Discover stylish Nike arrivals, quality comfort, and innovation for your active life
      </p>
      <Button classes="mt-14 flex justify-center items-center">
      Shop Now
      <FaArrowRight className="inline-block w-5 h-5 ml-2 text-coral-red p-1 bg-white rounded-full" />
      </Button>
      <div className="mt-20 w-full border-b-2 border-coral-red md:border-b-0"></div>
      <div className="flex gap-16 flex-col md:flex-row items-center mt-20">
        {statistics.map((statistic, index) => (
          <div  key={index} className="flex flex-col items-center justify-center font-palanquin">
            <h2 className="text-4xl font-bold  dark:text-gray-300">{statistic.value}</h2>
            <p className="text-lg text-slate-gray dark:text-white-400">{statistic.label}</p>
          </div>
        ))}
      </div>
     </div>
      
     <div className="relative bg-hero bg-cover bg-center rounded-b-xl max-xl:py-40  xl:min-h-screen flex flex-1 items-center justify-center">
      <img src={chooseShoe} alt="" height="500" width="610"  className="animate-shoe object-contain"/>
      <div className="flex flex-row gap-4  absolute bottom-[-70px]">
        {shoes.map((shoe, index) => (
          <div onClick={() => setChooseShoe(shoe.thumbnail)} className={`cursor-pointer flex items-center justify-center rounded-xl bg-card bg-cover bg-center drop-shadow-lg max-sm:p-4 sm:h-40 sm:w-40 ${shoe.thumbnail === chooseShoe ? "ring-coral-red ring-2 ring-inset " : ""}`} key={index}>
            <img src={shoe.thumbnail} alt="" height="127" width="103"  className={` ${shoe.thumbnail === chooseShoe ? "animate-pulse object-contain" : ""}` }/>
          </div>
        ))}
      </div>
     </div>
    </section>
  )
}

export default Hero
