import { useAppContext } from "../../contexts/app-context"
import { SummaryCard } from "../SummaryCard/SummaryCard"

export const Summary = () => {

    const {categories} = useAppContext();

    return(
        <footer id="footer">
            <div className="stats" id="stats">
                {categories.map((category, index) => (
                    <SummaryCard key={index} title={category.title} count={category.count}/>
                ))}
            </div>
        </footer>
    )
}