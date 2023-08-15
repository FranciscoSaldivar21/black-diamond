import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { apiURL } from "../../../api/config";

export const GiveawayCarrousel = ({ id }: props) => {
  const [images, setImages] = useState([{ image_name: "" }]);

  const getImages = async () => {
    try {
      const { data } = await axios.get(`${apiURL}giveaway/images/${id}`);
      setImages(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  return (
    <div className="2xl:h-[880px] sm:h-[400px] md:h-[520px] lg:h-[640px] xl:h-[760px] h-[280px] mt-6 mb-16 m-auto group">
      <div
        style={{ backgroundImage: `url(https://black-diamond-back-production.up.railway.app/uploads/${images[currentIndex].image_name})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover"
      ></div>
      <div className="flex top-4 justify-center py-2">
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};
