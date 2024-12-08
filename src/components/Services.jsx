import { services }  from '../constants '
import Service from './Service'

const Services = () => {
  return (
   <section className="container mx-auto mt-32 flex flex-wrap justify-center gap-9 px-4">


        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}


   </section>
  )
}

export default Services
