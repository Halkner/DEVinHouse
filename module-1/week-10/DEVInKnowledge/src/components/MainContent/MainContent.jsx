import React from "react"
import { useAppContext } from "../../contexts/app-context"
import { CardList } from "../CardList/CardList"
import { Filter } from "../Filter/Filter"
import { TipCard } from "../TipCard/TipCard"

export const MainContent = () => {
    const {tips} = useAppContext();
    return(
        <React.Fragment>
            <main>
                <div className="modal-card">
                    <div className="modal-card-content">
                        <span className="close-modal" id="close-modal-card">&times;</span>
                        <h2 id="modal-titulo"></h2>
                        <p id="modal-skill"></p>
                        <p id="modal-categoria"></p>
                        <p id="modal-descricao"></p>
                    </div>
                </div>

                <Filter/>
                <CardList>
                    {tips.map((tip) => (
                        <TipCard 
                        title={tip.title} 
                        langSkill={tip.langSkill}
                        category={tip.category}
                        description={tip.description}
                        videoUrl={tip.videoUrl}/>
                    ))}
                </CardList>
            </main>
        </React.Fragment>
    )
}