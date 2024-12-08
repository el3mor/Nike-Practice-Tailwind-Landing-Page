import { footerLogo } from "../assets/images"
import { socialMedia, footerLinks } from "../constants "
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <footer className=" mt-16 md:mt-32 bg-black">
      <div className="mx-auto container xl:padding-l wide:padding-r text-white flex gap-10 py-5 ">
        <div>
          <a href="/" ><img src={footerLogo} alt="footer logo" className="w-40" /></a>
          
          <p className="mt-6 font-montserrat leading-7 text-white-400 sm:max-w-sm">
          Get shoes that fit your style and your budget with the latest in fashion and comfort. We offer a wide range of products to suit your needs.Get Rewards!
          </p>
          <div className="flex gap-5 items-center mt-8">
            {socialMedia.map((social, index) => (
              <div key={index} className="bg-white p-3 rounded-full">
                <img src={social.src} alt={social.alt} className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between flex-1">
        {footerLinks.map((footerLink, index) => (
          <FooterLink key={index} footerLink={footerLink} />
        ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
