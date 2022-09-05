import React from "react"
import { MainContent } from "../components/MainContent/MainContent"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Summary } from "../components/Summary/Summary"

export const Home = () => {
    return(
        <React.Fragment>
            <main>
                <MainContent/>
            </main>
            <Sidebar/>
            <Summary/>
        </React.Fragment>
    )
}