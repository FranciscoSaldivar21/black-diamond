import { FaCcMastercard, FaCcVisa, FaCreditCard } from "react-icons/fa";

export const PayMethods = () => {
  return (
    <div className="flex-row mt-8 mb-12">
      <p className="text-center md:text-left font-semibold text-xl font-subTitles uppercase">
        Métodos de pago
      </p>
      <p className="mt-3 text-lg text-justify">Manejamos tranferencias electrónicas o depósitos en el lugar de tu conveniencia que se reflejarán en máximo 24 horas.</p>
      <div className="flex mt-2">
        <div>
          <FaCcVisa size={30} />
        </div>
        <div className="px-4">
          <FaCcMastercard size={30} />
        </div>
        <div>
          <FaCreditCard size={30} />
        </div>
      </div>
    </div>
  );
};
