import { useEffect, useState } from "react"
import { MyOrderCard } from "../../components/MyOrderCard"

export const MyOrders = () => {
    const [orders, setOrders] = useState(null);

    const fetchData = async () => {
        const response = await fetch("server.json");
        console.log(response);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className="my-order-main-container">
            <MyOrderCard />
        </div>
    )
}