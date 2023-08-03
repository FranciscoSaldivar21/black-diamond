import axios from "axios";
import { useEffect, useState } from "react"
import { userStore } from "../../../store/userStore";
import { SaleCard } from "../moleculs/SaleCard";

export const MyShopping = () => {
    const userId = userStore((state) => state.id);
    const token = userStore((state) => state.token);
    const [isLoading, setIsLoading] = useState(true);
    const [sales, setSales] = useState([]);


    const getSales = async () => {
        const { data } = await axios.get(`http://localhost:3000/api/sales/${userId}`, {
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
    <div className="grid grid-cols-3 gap-3 items-start mt-4">
        {
            sales.map((sale) => <SaleCard sale={sale} key={sale.id} />)
        }
    </div>
  );
}
