import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <ul className="flex justify-center my-4">
      <li className="px-4">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3326095961&text=Hola%20,quiero%20saber%20mas
%20acerca%20de%20los%20sorteos.%0A"
          rel="noreferrer"
        >
          <FaWhatsapp size={30} color="white" />
        </a>
      </li>
      <li className="px-4">
        <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
          <FaFacebookSquare size={30} color="white" />
        </a>
      </li>
      <li className="px-4">
        <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
          <FaInstagram size={30} color="white" />
        </a>
      </li>
      <li className="px-4">
        <a
          target="_blank"
          href="https://www.tiktok.com/foryou"
          rel="noreferrer"
        >
          <FaTiktok size={28} color="white" />
        </a>
      </li>
    </ul>
  );
};
