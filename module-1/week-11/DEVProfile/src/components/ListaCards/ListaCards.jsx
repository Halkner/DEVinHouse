import { Card } from "../Card/Card"
import {useProfiles} from '../../hooks/useProfiles'
import { CardsContainer } from "./styles"

export const ListaCards = () =>{

    const {profiles} = useProfiles()
    
    return(    
        <CardsContainer>
            {profiles.map((p) => (
                <Card key={p.id} profile={p}/>
            ))}
        </CardsContainer>
    )

}