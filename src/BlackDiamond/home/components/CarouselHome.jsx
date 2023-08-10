import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";

export const CarouselHome = () => {
  const slides = [
    {
      url: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5ddb94b1bcb3b63ca9748722d899ec98.jpg",
    },
    {
      url: "https://static.motor.es/fotos-noticias/2022/08/cupra-202288985-1659953797_1.jpg",
    },
    {
      url: "https://secretmagazine.com.mx/wp-content/uploads/2023/07/BMW-M4-2023-4-1024x576.jpg",
    },

    {
      url: "https://www.topgear.com/sites/default/files/2022/03/ROW08514.jpg",
    },
    {
      url: "https://autodinamico.mx/wp-content/uploads/2023/03/supra-2-1616x1080.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      if(currentIndex === slides.length - 1){
        setCurrentIndex(0);
      }else{
        setCurrentIndex(currentIndex + 1);
      }
    }, 6000);
  }, [currentIndex, slides.length])
  

  return (
    <div className="2xl:h-[580px] md:h-[340px] lg:h-[480px] xl:h-[600px] h-[280px] mt-10 mb-16">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover"
      ></div>
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
