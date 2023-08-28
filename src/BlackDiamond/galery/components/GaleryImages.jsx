import image1 from "../../../assets/galery/foto1.jpg";
import image2 from "../../../assets/galery/foto2.jpg";
import image3 from "../../../assets/galery/foto3.jpg";
import image4 from "../../../assets/galery/foto4.jpg";
import image5 from "../../../assets/galery/foto5.jpg";
import image6 from "../../../assets/galery/foto6.jpg";

export const GaleryImages = () => {
  return (
    <div className="grid gap-1 px-1 w-11/12 lg:w-10/12 justify-center items-center mb-6 lg:mb-12 m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-2">
        <img src={image1} className="w-full" />
        <img src={image2} className="w-full" />
        <img src={image3} className="w-full" />
        <img src={image4} className="w-full" />
        <img src={image5} className="w-full" />
        <img src={image6} className="w-full" />
      </div>
    </div>
  );
};
