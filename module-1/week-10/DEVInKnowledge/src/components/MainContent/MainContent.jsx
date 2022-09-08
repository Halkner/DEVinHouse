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
                <Filter/>
                <CardList>
                    {tips.map((tip, index) => (
                        <TipCard
                        key={index}
                        id={tip.id}
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