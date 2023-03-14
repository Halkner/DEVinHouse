import { useEffect, useState } from "react"
import { MyOrderCard } from "../../components/MyOrderCard"
import api from "../../services/api"

export const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const fetchData = async () => {
        api.get('/orders')
            .then(response => {
                setOrders(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className="my-order-main-container">
            {orders.map(order => (
                <MyOrderCard key={order.id} order={order} />
            ))}
        </div>
    )
}