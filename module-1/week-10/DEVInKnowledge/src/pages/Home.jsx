import React from "react"
import { MainContent } from "../components/MainContent/MainContent"
import { Sidebar } from "../components/Sidebar/Sidebar"

export const Home = () => {
    return(
        <React.Fragment>
            <MainContent/>
            <Sidebar/>
        </React.Fragment>
    )
}