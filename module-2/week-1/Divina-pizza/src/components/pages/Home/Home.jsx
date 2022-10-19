import { MainContent } from "../../MainContent/MainContent";
import { Topbar } from "../../Topbar/Topbar";
import { GridContainer } from "./styles";

export const Home = () => {
    return(
        <GridContainer>
            <Topbar/>
            <MainContent/>
        </GridContainer>
    )
}