import {
  customer1,
  customer2
} from '../assets/images/index'
import {star} from '../assets/icons/index'

const Customers = () => {
  return (
    <section className="mt-32 bg-pale-blue py-24">
      <section className="container mx-auto">
        <h2 className=" text-center font-palanquin text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-slate-gray">
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>

          <div className='mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col'>
          <div className="flex flex-col items-center justify-center">
              <img src={customer1} alt="customer1" className="w-32 h-32 rounded-full" />
              <div className="mt-3 flex flex-col items-center">
                <p className='text-slate-gray max-w-sm text-center'>
                The product not only met my expectations but exceeded them. I&apos;ll definitely be a returning customer!
                </p>
                <div className="flex gap-2 text-xl text-slate-gray mt-5">
                  <img src={star} alt="star" className="w-6 h-6" />
                  <span>(4.5)</span>
                </div> 
                <h3 className='text-3xl my-2 font-bold font-palanquin mt-5'>Morich Brown</h3>
              </div>

            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={customer2} alt="customer1" className="w-32 h-32 rounded-full" />
              <div className="mt-3 flex flex-col items-center">
                <p className='text-slate-gray max-w-sm text-center'>
                The product not only met my expectations but exceeded them. I&apos;ll definitely be a returning customer!
                </p>
                <div className="flex gap-2 text-xl text-slate-gray mt-5">
                  <img src={star} alt="star" className="w-6 h-6" />
                  <span>(4.8)</span>
                </div> 
                <h3 className='text-3xl my-2 font-bold font-palanquin mt-5'>Daisy Eulrich</h3>
              </div>

            </div>
          </div>
      </section>
    </section>
  )
}

export default Customers
