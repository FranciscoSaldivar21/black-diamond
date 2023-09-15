import { useLocation } from "react-router-dom";
import { Layout } from "../../ui/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { BuyTickest } from "../components/BuyTickest";
import { userStore } from "../../../store/userStore";
import { TransferData } from "../components/TransferData";
import { apiURL } from "../../../api/config";
import { NavBar } from "../../ui/components";
import { PendingPay } from "../components/PendingPay";
import { ThanksForPay } from "../components/ThanksForPay";
import { SaleDetail } from "../components/SaleDetail";
import { GiveawayDetail } from "../components/GiveawayDetail";
import { SaleBenefic } from "../components/SaleBenefic";

export const SalePage = () => {
  const token = userStore((state) => state.token);
  const reset = userStore((state) => state.reset);
  const [isLoading, setIsLoading] = useState(true);
  const [sale, setSale] = useState({});
  const [total, setTotal] = useState(0);
  const [tickets, setTickets] = useState([]);
  const location = useLocation();

  //Extraer parametro para mostrar datos
  const saleId = location.state.saleId;

  const getSaleData = async () => {
    try {
      const { data } = await axios.get(`${apiURL}sales/getSaleById/${saleId}`, {
        headers: {
          "x-token": token,
        },
      });
      setSale(data.saleData);
      setTickets(data.ticketsData);
      setIsLoading(false);

      //Total de compra
      const total = tickets.reduce(
        (sum, current) =>
          current.status === 1 ? sum + current.ticket_price : sum,
        0
      );
      setTotal(total);
    } catch (error) {
      if (error.response.data.ok === false) reset();
    }
  };

  useEffect(() => {
    getSaleData();
  }, [isLoading]);

  return (
    <Layout>
      <NavBar />
      <div className="w-11/12 mx-auto py-4 md:py-8">
        <p className="text-4xl uppercase md:text-5xl font-bold">Tu compra</p>
        {sale.saleStatus === 0 ? <PendingPay /> : <ThanksForPay />}
        <SaleDetail
          id={sale.id}
          sale_date={sale.sale_date}
          total={total}
          payStatus={sale.saleStatus}
        />
        <GiveawayDetail
          car={sale.car}
          creation_date={sale.creation_date}
          giveaway_date={sale.giveaway_date}
          status={sale.status}
        />
        <SaleBenefic benefic={sale.benefic} />
        <BuyTickest data={tickets} benefic={sale.benefic} />
      </div>
    </Layout>
  );
};
