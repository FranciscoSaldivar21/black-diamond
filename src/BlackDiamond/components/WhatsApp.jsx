import { FaWhatsapp } from "react-icons/fa";

export const WhatsApp = () => {
  return (
    <div className="fixed right-16 bottom-12 animate-bounce">
      <div className="flex p-3 rounded-full items-center justify-end bg-lightGreen border-2 border-solid">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=3326095961&text=Hola%20,quiero%20saber%20mas
%20acerca%20de%20los%20sorteos.%0A"
        >
          <FaWhatsapp size={40} color="white" />
        </a>
      </div>
    </div>
  );
}
