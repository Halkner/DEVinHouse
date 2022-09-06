import React from "react";
import { useState } from "react";
import { useContext } from "react";

const Context = React.createContext();

export const useAppContext = () => {
    const context = useContext(Context);

    return context;
}

export const AppContext = props => {

    const [allTips, setAllTips] = useState([]);
    const [filter, setFilter] = useState(null)

    const createTip = (data) => {
        setAllTips(...allTips, data)
    }

    const filterTips = (query) => {
        if (query) {
            setFilter(query);
        }else{
            setFilter(null);
        }
    }

    const tips = filter 
    ? allTips.filter((tip) => tip.titulo.includes(filter)) 
    : allTips;

    const sortByCategory = () => {
        const categories = ["Front-End","Back-End","Full Stack","Comportamental/Soft"];
        console.log(categories);
        return categories.map((catName) => {
          const count = allTips.filter((tip) => tip.categoria == catName).length;
          return { title: catName, count: count };
        });
    };

    const categories = sortByCategory();

    return(
        <Context.Provider value={{createTip, filterTips, tips, categories}}>
            {props.children}
        </Context.Provider>
    )
}

