import Aboutus from "./components/Aboutus"
import Contact from "./components/Contact"
import Customers from "./components/Customers"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Offer from "./components/Offer"
import Products from "./components/Products"
import Services from "./components/Services"


function App() {


  return (
    <div>
    <Header />
    <main className="xl:padding-l wide:padding-r padding-b">
      <Hero />
      <Products />
      <Aboutus />
      <Services />
      <Offer />
     
    </main>
    <Customers />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
