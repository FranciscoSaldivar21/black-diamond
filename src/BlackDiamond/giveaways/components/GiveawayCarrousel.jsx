import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const GiveawayCarrousel = () => {
  const slides = [
    {
      url: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_0db230125fe84e8f8351a2a8c5eb65e1.jpg",
    },
    {
      url: "https://editorial.pxcrush.net/carsales/general/editorial/190904_shelby_f150_01.jpg?width=1024&height=683",
    },
    {
      url: "https://assets-global.website-files.com/5b4a3b3971d099f78f362505/62e7ec1b2265c54334148f01_2022-Ford-F-150-Shelby-Super-Snake-White-1FTFW1E55NFA21059_012.jpg",
    },

    {
      url: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2015/11/477039-ford-f150-shelby-blanco.jpg?tf=3840x",
    },
    {
      url: "https://es.digitaltrends.com/wp-content/uploads/2017/05/shelby-f-150-super-snake-feat.jpg?p=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[700px] w-full m-auto mt-10 relative group mb-16">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};
