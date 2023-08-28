export const Bonus = () => {
  return (
    <div className="mt-4 p-4 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-start">
      <p className="mt-8 font-subTitles text-xl uppercase font-bold">
        ¿Cuáles son los bonos para el boleto ganador?
      </p>
      <ol className="mt-3 list-disc ml-4">
        <li>
          <p className="text-justify text-lg">
            Fase Bono BLACK DIAMOND GOLD (placas + seguro + bono sorpresa
            estimado en $150,000 pesos).
          </p>
        </li>
        <li>
          <p className="text-justify text-lg">
            Fase Bono BLACK DIAMOND SILVER (placas + bono sorpresa estimado en
            $100,000 pesos).
          </p>
        </li>
        <li>
          <p className="text-justify text-lg">
            Fase Bono BLACK DIAMOND BRONZE (permiso de 30 días + bono estimado
            en $50,000 pesos).
          </p>
        </li>
        <li>
          <p className="text-justify text-lg">
            Bono SUPER TRIPLE BLACK DIAMOND bono sorpresa estimado en $200,000
            pesos.
          </p>
        </li>
      </ol>
    </div>
  );
}
