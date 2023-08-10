import { SocialMedia } from "./SocialMedia.jsx";


export const Footer = () => {
  return (
    <div className="flex items-center justify-center h-36 w-full bg-black">
      <div className="flex-row">
        <p className="uppercase text-center font-titles text-background">Black diamond</p>{/*&#174;*/}
        <SocialMedia />
        <p className="text-center text-background uppercase">
          Visitanos en nuestras redes sociales
        </p>
      </div>
    </div>
  );
}
