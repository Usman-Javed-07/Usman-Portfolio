import { socialLinks } from "../../constants/socialLinks";

const SocialLinks = ({ showText = false }) => {
  return (
    <>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Icon />
              {showText && <p className="sidebar-link-text">{link.name}</p>}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default SocialLinks;
