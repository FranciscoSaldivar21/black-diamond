import axios from "axios";
import { useEffect, useState } from "react"
import { userStore } from "../../../store/userStore";
import { SaleCard } from "../moleculs/SaleCard";
import { apiURL } from "../../../api/config";

export const MyShopping = () => {
    const userId = userStore((state) => state.id);
    const token = userStore((state) => state.token);
    const [isLoading, setIsLoading] = useState(true);
    const [sales, setSales] = useState([]);


    const getSales = async () => {
        const { data } = await axios.get(`${apiURL}sales/${userId}`, {
            headers: {
                "x-token": token,
            },
        });
        setSales(data.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getSales();
    }, [isLoading])
    
  return (
    sales.length > 0 ?
        <div className="grid grid-cols-1 gap-y-4 mt-4">
            {
                sales.map((sale) => <SaleCard sale={sale} key={sale.id} />)
            }
        </div>
    : <div className="h-[300px] md:h-[318px]"></div>
  );
}
