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
        setAllTips([...allTips, data])
    }

    const filterTips = (query) => {
        if (query) {
            setFilter(query);
        }else{
            setFilter(null);
        }
    }

    const tips = filter 
    ? allTips.filter((tip) => tip.title.includes(filter)) 
    : allTips;

    const sortByCategory = () => {
        const categories = ["Front-End","Back-End","Full Stack","Comportamental/Soft"];
        return categories.map((catName) => {
          const count = allTips.filter((tip) => tip.category == catName).length;
          return { title: catName, count: count };
        });
    };

    const categories = sortByCategory();

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const [openStats, setOpenStats] = useState(false);

    const toggleStatsBtn = () => {
        setOpenStats(!openStats);
    }

    return(
        <Context.Provider value={{createTip, filterTips, tips, categories, openModal, closeModal, modalIsOpen, toggleStatsBtn, openStats}}>
            {props.children}
        </Context.Provider>
    )
}

