import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SaleCard = ({ sale }: props) => {
    const navigate = useNavigate();
    const [images, setImages] = useState([{ image_name: "" }]);

    const getImages = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:3000/api/giveaway/images/" + sale.giveaway_id
            );
            setImages(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getImages();
    }, [])
    

    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img
                className="w-full"
                src={`http://localhost:3000/uploads/${images[0].image_name}`}
                alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{sale.car}</p>
                <p className="text-justify">Id de compra: {sale.id}</p>
                <p className="text-justify">Fecha de compra: {sale.sale_date}</p>
                <p className="text-justify">{sale.description}</p>
                <p className="mt-2">
                    Status:{" "}
                    {sale.status === 1 ? (
                        <span className="text-green-500">Activo</span>
                    ) : (
                        <span className="text-red-500">Finalizado</span>
                    )}
                </p>
            </div>
            <div className="flex justify-center align-bottom">
                <button
                    onClick={() => navigate('/sale', { state: { saleId: sale.id } })}
                    className="uppercase rounded w-60 h-8 mb-4 text-black transition ease-in-out delay-50 bg-darkGold hover:-translate-y-1 hover:scale-110 hover:bg-lightGold duration-100"
                >
                    Ver compra
                </button>
            </div>
        </div>
    );
}
