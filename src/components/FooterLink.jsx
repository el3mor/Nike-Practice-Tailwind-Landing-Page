
import PropTypes from 'prop-types';

const FooterLink = ({footerLink}) => {
  const { title, links } = footerLink
  return (
    <div>
      <h4 className="font-montserrat text-white-400 font-bold text-xl">{title}</h4>
      <ul className="mt-6">
        {links.map((link, index) => (
          <li key={index} className="mt-2">
            <a href={link.link} className="text-white-400 hover:text-coral-red">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

FooterLink.propTypes = {
  footerLink: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default FooterLink;
