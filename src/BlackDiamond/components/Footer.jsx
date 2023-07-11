import { FaFacebookSquare, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className="flex items-center justify-center h-36 w-full bg-black mt-8">
      <div className="flex-row">
        <p className="font-serif text-center text-slate-50">Black diamond&#174;</p>
        <ul className="flex justify-center my-4">
          <li className="px-4">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=3326095961&text=Hola%20,quiero%20saber%20mas
%20acerca%20de%20los%20sorteos.%0A" rel="noreferrer">
              <FaWhatsapp size={30} color="white"/>
            </a>
          </li>
          <li className="px-4">
            <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
              <FaFacebookSquare size={30} color="white"/>
            </a>
          </li>
          <li className="px-4">
            <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
              <FaInstagram size={30} color="white"/>
            </a>
          </li>
          <li className="px-4">
            <a target="_blank" href="https://www.tiktok.com/foryou" rel="noreferrer">
              <FaTiktok size={28} color="white"/>
            </a>
          </li>
        </ul>
        <p className="text-center text-slate-50">Visitanos en nuestras redes</p>
      </div>
    </div>
  )
}
