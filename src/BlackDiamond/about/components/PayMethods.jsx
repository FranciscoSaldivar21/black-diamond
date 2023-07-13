import { FaCcMastercard, FaCcVisa, FaCreditCard } from "react-icons/fa";

export const PayMethods = () => {
  return (
    <div className="flex-row mt-8 mb-12">
      <p className="text-left font-playFair font-semibold text-2xl">Métodos de pago</p>
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
