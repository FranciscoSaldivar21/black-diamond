

import { SocialMedia } from "./SocialMedia.jsx";


export const Footer = () => {
  return (
    <div className="flex items-center justify-center h-36 w-full bg-black mt-8">
      <div className="flex-row">
        <p className="uppercase font-serif text-center text-background">Black diamond</p>{/*&#174;*/}
        <SocialMedia />
        <p className="text-center text-background">
          Visitanos en nuestras redes sociales
        </p>
      </div>
    </div>
  );
}
