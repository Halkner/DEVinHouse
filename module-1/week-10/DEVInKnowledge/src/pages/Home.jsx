import React from "react"
import { Header } from "../components/Header/Header"
import { MainContent } from "../components/MainContent/MainContent"
import { Summary } from "../components/Summary/Summary"
import { Modal } from "../components/Modal/Modal"

export const Home = () => {
    return(
        <React.Fragment>
            <Modal/>
            <Header/>
            <Summary/>
            <MainContent/>
            
        </React.Fragment>
    )
}