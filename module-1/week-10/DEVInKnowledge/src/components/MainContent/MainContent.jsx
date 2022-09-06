import React from "react"
import { useAppContext } from "../../contexts/app-context"
import { CardList } from "../CardList/CardList"
import { Filter } from "../Filter/Filter"
import { TipCard } from "../TipCard/TipCard"

export const MainContent = () => {
    const result = useAppContext();
    console.log(result);
    return(
        <React.Fragment>
            <main>
                <div className="modal-card">
                    <div className="modal-card-content">
                        <span className="close-modal" id="close-modal-card">&times;</span>
                        <h2 id="modal-titulo"></h2>
                        <p id="modal-skill"></p>
                        <p id="modal-categoria"></p>
                        <p id="modal-descricao"></p>
                    </div>
                </div>

                <Filter/>
                <CardList>
                    <TipCard title="Arrays" langSkill="Python" category="Full Stack" description="Nulla dolore labore mollit do ad adipisicing laborum ex culpa dolore.Mollit commodo quis commodo quis veniam veniam quis mollit aute ipsum aliqua elit aliqua.Minim cupidatat anim proident culpa ipsum fugiat laborum cillum cillum eiusmod ipsum.Cupidatat ullamco esse voluptate incididunt eiusmod eiusmod.Quis nostrud sit laborum eiusmod ipsum aliqua adipisicing duis exercitation officia et.Qui duis aliqua ad occaecat sunt sunt nulla Lorem voluptate et.Consequat excepteur aliqua irure est aliquip fugiat ullamco magna do et.Excepteur sint fugiat voluptate exercitation adipisicing adipisicing non exercitation.Aliqua ea proident deserunt quis.Laboris officia cillum non tempor exercitation occaecat proident labore cillum minim."/>
                </CardList>
            </main>
        </React.Fragment>
    )
}