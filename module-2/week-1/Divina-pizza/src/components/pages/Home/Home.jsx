import { ModalProvider } from "../../../contexts/ModalContext/ModalProvider";
import { MainContent } from "../../MainContent/MainContent";
import { Topbar } from "../../Topbar/Topbar";
import { GridContainer } from "./styles";

export const Home = () => {
    return(
        <ModalProvider>
            <GridContainer>
                <Topbar/>
                <MainContent/>
            </GridContainer>
        </ModalProvider>
    )
}