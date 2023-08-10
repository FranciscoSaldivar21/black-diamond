import { FaCcMastercard, FaCcVisa, FaCreditCard } from "react-icons/fa";

export const PayMethods = () => {
  return (
    <div className="flex-row mt-8 mb-12">
      <p className="text-left font-semibold text-xl font-subTitles uppercase">
        Métodos de pago
      </p>
      <p className="mt-3 text-lg text-justify">Manejamos pagos cómodos que se realizan desde nuestra página web y se reflejan al instante.</p>
      <p className=" text-lg text-justify">De esta forma garantizamos la seguridad de tus datos personales y que tu compra se vea reflejada al momento.</p>
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
