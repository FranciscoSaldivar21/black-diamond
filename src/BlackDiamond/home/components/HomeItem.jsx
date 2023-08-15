

export const HomeItem = () => {
  return (
    <div className="mt-8">
      <h2 className="font-titles font-semibold text-3xl md:text-3xl mb-6 text-center">
        LA MEJOR OPCIÓN PARA TENER EL AUTO DE TUS SUEÑOS
      </h2>
      <div>
        <p className="text-lg mb-2 text-justify">
          Estamos enfocados en la rifa y sorteo de vehículos de gama alta para
          que por medio de poca inversión puedas tener el coche que siempre has
          soñado.
        </p>
        <p className="text-lg text-justify">
          Somos una empresa 100% mexicana ubicada en Guadalajara Jalisco
          dedicada al sorteo y rifa de vehículos de gama premium.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
          <div className="p-4 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-start">
            <p className="mt-8 font-subTitles text-xl uppercase font-bold">
              Misión
            </p>
            <p className="text-lg mt-3 text-justify">
              Nuestro mision es brindar a nuestros clientes la posibilidad de
              tener un carro de gama alta por medio de poca inversión
            </p>
          </div>
          <div className="p-4 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-start">
            <p className="mt-8 font-subTitles text-xl uppercase font-bold">
              Visión
            </p>
            <p className="text-lg mt-3 text-justify">
              Ser una de las empresas mas importantes del sector, brindando a
              nuestros clientes fiabilidad, seguridad y sobre todo comodidad
              para participar en nuestros sorteos, marcando una diferencia con
              nuestra competencia a través de nuestra forma de trabajar y la
              experiencia que se le brindará al cliente.
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
          <div className="p-4 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-start">
            <p className="mt-8 font-subTitles text-xl uppercase font-bold text-center">
              ¿Por qué comprar un boleto con nosotros?
            </p>
            <p className="text-lg mt-3 text-justify">
              1. Somos una empresa confiable ubicada en Guadalajara, Jalisco.{" "}
              <br />
              2. Somos expertos en sorteos de vehículos de alta gama. <br />
              3. Nuestros sorteos se basan siempre en la lotería nacional.{" "}
              <br />
              4. Siempre contamos con nuevas dinámicas para que tengas la
              posibilidad de ganar con nosotros. <br />
              5. Realizamos transmisiones en vivo de nuestra plataforma donde
              los boletos comprados por nuestros clientes están registrados para
              notificar a los ganadores. <br />
              6. Damos bonos y premios en todos nuestros sorteos.
            </p>
          </div>
          <div className="p-4 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-start">
            <p className="mt-8 font-subTitles text-xl uppercase font-bold">
              ¿Cómo son las dinamicas de nuestros sorteos?
            </p>
            <ul className="mt-3 list-disc ml-4">
              <li>
                <p className="text-justify text-lg">
                  Todo sorteo se realiza en base a la LOTERIA NACIONAL PARA LA
                  ASISTENCIA PUBLICA MEXICANA.
                </p>
              </li>
              <li>
                <p className="text-justify text-lg">
                  El ganador de BLACK DIAMOND será el participante cuyo numero
                  de boleto coincida las ultimas 5 cifras del primer premio
                  ganador de la lotería nacional (todo sorteo vendrán con la
                  fecha basada a la misma LN).
                </p>
              </li>
              <li>
                <p className="text-justify text-lg">
                  Se elegirá un nuevo ganador realizando la misma dinámica en la
                  siguiente fecha del premio de la lotería Nacional (en nuestra
                  pagina haremos mención de la siguiente fecha) entonces tendrá
                  una segunda oportunidad de ser el ganador con tu misma
                  numeración.
                </p>
              </li>
              <li>
                <p className="text-justify text-lg">
                  Toda transmisión será en vivo de los sorteos en nuestra pagina
                  de Facebook en las fechas indicadas a las 20:00 hrs del centro
                  del país.
                </p>
              </li>
              <li>
                <p className="text-justify text-lg">
                  En nuestra pagina web de Black diamond haremos la transmisión
                  en vivo con la lotería nacional, asi como las entregas de los
                  premios a los ganadores.
                </p>
              </li>
              <li>
                <p className="text-justify text-lg">
                  RIFA CONCESIONADA AL 90% DE EMISIONES.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
