import logoMenu from "../../../assets/logo-menu.png";

export const BrandInformation = () => {
  return (
    <div className="flex flex-col items-center lg:items-start  justify-center pb-8">
      <img className="w-36 pb-4" src={logoMenu} />
      <p className="text-white">Todos los derechos reservados &#174; 2023</p>
      <p className="text-white">Términos y condiciones</p>
      <p className="text-white">Politica de privacidad</p>
      <p className="text-white">Cookies</p>
    </div>
  );
}
