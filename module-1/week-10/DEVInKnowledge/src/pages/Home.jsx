import React from "react"
import { Header } from "../components/Header/Header"
import { MainContent } from "../components/MainContent/MainContent"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Summary } from "../components/Summary/Summary"

export const Home = () => {
    return(
        <React.Fragment>
            <Header/>

            <MainContent/>

            <Sidebar/>
            
            <Summary/>
        </React.Fragment>
    )
}