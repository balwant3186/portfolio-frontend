import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/Balwant3186"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/beastop3186/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
