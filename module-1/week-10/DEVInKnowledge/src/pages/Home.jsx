import React from "react"
import { Header } from "../components/Header/Header"
import { MainContent } from "../components/MainContent/MainContent"
import { Modal } from "../components/Modal/Modal"
import { Summary } from "../components/Summary/Summary"

export const Home = () => {
    return(
        <React.Fragment>
            <Header/>

            <MainContent/>

            <Modal/>
            
            <Summary/>
        </React.Fragment>
    )
}