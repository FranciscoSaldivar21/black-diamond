import image1 from "../../../assets/galery/imagen-shelby-1.jpg";
import image2 from "../../../assets/galery/imagen-shelby-2.jpg";
import image3 from "../../../assets/galery/imagen-shelby-3.jpg";
import image5 from "../../../assets/galery/imagen-shelby-5.jpg";
import image6 from "../../../assets/galery/imagen-shelby-6.jpg";
import image7 from "../../../assets/galery/imagen-shelby-7.jpg";
import image8 from "../../../assets/galery/imagen-shelby-8.jpg";

export const GaleryImages = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Imagenes de la izquierda */}
        <div className="grid grid-cols-2 grid-rows-1 col-span-3 gap-4">
          <div className="cover w-full h-1/2 bg-">
            <img
              src={image7}
              loading="lazy"
              className="w-full h-auto col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
            />
          </div>
          <div className="cover w-full h-auto">
            <img
              src={image8}
              loading="lazy"
              className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Imagen sola de la izquierda */}
        <div className="grid grid-cols-1 grid-rows-1 col-span-1">
          <img
            src={image2}
            loading="lazy"
            className="w-full h-full row-start-1 row-end-2 col-span-1 row-span-2 rounded-lg"
          />
        </div>
        {/* Imagenes de la derecha */}
        <div className="grid grid-cols-1 grid-rows-2 col-span-2 gap-8">
          <img
            src={image1}
            loading="lazy"
            className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
          />
          <img
            src={image3}
            loading="lazy"
            className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Imagenes de la izquierda */}
        <div className="grid grid-cols-2 grid-rows-1 col-span-3 gap-4">
          <div className="cover w-full h-1/2 bg-">
            <img
              src={image5}
              loading="lazy"
              className="w-full h-auto col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
            />
          </div>
          <div className="cover w-full h-auto">
            <img
              src={image6}
              loading="lazy"
              className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
