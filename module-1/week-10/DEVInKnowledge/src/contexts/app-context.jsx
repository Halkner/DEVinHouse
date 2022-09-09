import React from "react";
import { useState } from "react";
import { useContext } from "react";

const Context = React.createContext();

export const useAppContext = () => {
    const context = useContext(Context);

    return context;
}

export const AppContext = props => {

    const [allTips, setAllTips] = useState([
        {
            id: 0,
            title: "Array/Lists",
            langSkill: "Python",
            category: "Back-End",
            description: "Nostrud proident ut consectetur amet cillum.Irure qui eiusmod ipsum aute non.Proident dolore Lorem labore ullamco irure nisi do elit proident ut excepteur qui ut.Pariatur incididunt pariatur est irure consequat non nostrud laboris minim laborum dolor.Anim enim nisi irure occaecat duis duis.",
            videoUrl: "https://cssgradient.io/",
        },
    ]);
    const [filter, setFilter] = useState(null)

    const createTip = (data) => {

        const trueData = {...data, id: allTips.length}
        setAllTips([...allTips, trueData])   
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

    const removeCard = (id) => {
        setAllTips(allTips.filter((card) => card.id !== id));
    }

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
        modalIsOpen ? setIsOpen(false) : setStatusEditModal(false);
    }


    const [openStats, setOpenStats] = useState(false);

    const toggleStatsBtn = () => {
        setOpenStats(!openStats);
    }

    return(
        <Context.Provider value={{createTip, filterTips, tips, categories, openModal, closeModal, modalIsOpen, toggleStatsBtn, openStats, removeCard}}>
            {props.children}
        </Context.Provider>
    )
}

