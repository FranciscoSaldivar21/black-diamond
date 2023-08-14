export const GaleryImages = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="grid grid-cols-2 grid-rows-1 col-span-3 gap-4">
        <div className="cover w-full h-1/2 bg-">
          <img
            src="https://black-diamond-production-971e.up.railway.app/src/assets/galery/imagen-shelby-7.jpg"
            loading="lazy"
            className="w-full h-auto col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
          />
        </div>
        <div className="cover w-full h-auto">
          <img
            src="https://black-diamond-production-971e.up.railway.app/src/assets/galery/imagen-shelby-8.jpg"
            loading="lazy"
            className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Imagen sola de la izquierda */}
        <div className="grid grid-cols-1 grid-rows-1 col-span-1">
          <img
            src="https://black-diamond-production-971e.up.railway.app/src/assets/galery/imagen-shelby-2.jpg"
            loading="lazy"
            className="w-full h-full row-start-1 row-end-2 col-span-1 row-span-2 rounded-lg"
          />
        </div>
        {/* Imagenes de la derecha */}
        <div className="grid grid-cols-1 grid-rows-2 col-span-2 gap-8">
          <img
            src="https://black-diamond-production-971e.up.railway.app/src/assets/galery/imagen-shelby-1.jpg"
            loading="lazy"
            className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
          />
          <img
            src="https://black-diamond-production-971e.up.railway.app/src/assets/galery/imagen-shelby-3.jpg"
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
              src="https://black-diamond-production-971e.up.railway.app/src/assets/galery/imagen-shelby-5.jpg"
              loading="lazy"
              className="w-full h-auto col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
            />
          </div>
          <div className="cover w-full h-auto">
            <img
              src="https://black-diamond-production-971e.up.railway.app/src/assets/galery/imagen-shelby-6.jpg"
              loading="lazy"
              className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
