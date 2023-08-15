import { FaWhatsapp } from "react-icons/fa";

export const WhatsApp = () => {
  // animate-bounce
  return (
    <div className="fixed right-3.5 sm:right-5 md:right-12 bottom-7">
      <div className="flex p-3 rounded-full items-center justify-end bg-green-500">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=3322122459&text=Hola%20,quiero%20saber%20mas
%20acerca%20de%20los%20sorteos.%0A"
        >
          <FaWhatsapp size={40} color="white" />
        </a>
      </div>
    </div>
  );
}
