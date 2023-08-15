import image8 from "../../../assets/galery/imagen-shelby-8.jpg";
import image5 from "../../../assets/galery/imagen-shelby-5.jpg";
import image6 from "../../../assets/galery/imagen-shelby-6.jpg";
import image7 from "../../../assets/galery/imagen-shelby-7.jpg";
import image8webp from "../../../assets/galery/imagen-shelby-8.webp";
import image5webp from "../../../assets/galery/imagen-shelby-5.webp";
import image6webp from "../../../assets/galery/imagen-shelby-6.webp";
import image7webp from "../../../assets/galery/imagen-shelby-7.webp";


export const GaleryImages = () => {
  return (
    <div className="flex flex-col gap-1.5 md:gap-2.5 xl:gap-4 p-1">
      <div className="grid grid-cols-2 gap-1.5 md:gap-2.5 xl:gap-4 px-2">
        <picture className="w-full rounded-lg">
          <source srcSet={image7webp} type="image/webp" />
          <img
            src={image7}
            className="w-full rounded-lg"
          />
        </picture>
        <picture className="w-full row-start-1 col-start-1 rounded-lg">
          <source srcSet={image8webp} type="image/webp" />
          <img
            src={image8}
            className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
          />
        </picture>
      </div>
      <div className="grid grid-cols-2 gap-1.5 md:gap-2.5 xl:gap-4 px-2">
        <picture className="w-full rounded-lg">
          <source srcSet={image5webp} type="image/webp" />
          <img
            src={image5}
            className="w-full rounded-lg"
          />
        </picture>
        <picture className="w-full row-start-1 col-start-1 rounded-lg">
          <source srcSet={image6webp} type="image/webp" />
          <img
            src={image6}
            className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
          />
        </picture>
      </div>
    </div>
  );
};
