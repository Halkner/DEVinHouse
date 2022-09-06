import { SummaryCard } from "../SummaryCard/SummaryCard"

export const Summary = () => {
    return(
        <footer id="footer">
            <div className="stats" id="stats">
                <SummaryCard title="Total" count={0}/>

                <SummaryCard title="Front-End" count={0}/>

                <SummaryCard title="Back-End" count={0}/>

                <SummaryCard title="FullStack" count={0}/>
                
                <SummaryCard title="SoftSkill" count={0}/>
            </div>
        </footer>
    )
}