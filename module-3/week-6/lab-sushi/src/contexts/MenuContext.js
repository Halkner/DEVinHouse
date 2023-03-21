import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { productsActions } from "../actions/product.action";
import { priceFormat } from "../utils/priceFormat";

export const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    productsActions.getProductsAction()
      .then((response) => {
        setProducts(response.data.map((item) => {
          return {
            ...item,
            priceFormatted: priceFormat(item.price)
          }
        }))
      })
      .catch(() => toast.error('Houve um erro ao buscar os produtos :('))
  }

  const [allCards, setAllCards] = useState(products)

  const [filter, setFilter] = useState('')

  const filterCards = (query) => {
    if(query){
      setFilter(query)
    }else{
      setFilter('')
    }
  }

  const cards = filter ? allCards.filter((card) => card.name.toLowerCase().includes(filter.toLowerCase())) : allCards

  return(
    <MenuContext.Provider value={{cards, filterCards, getAllProducts}}>
        {children}
    </MenuContext.Provider>
  )
}