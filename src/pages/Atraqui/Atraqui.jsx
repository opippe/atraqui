import BarraLateral from "../../components/BarraLateral/BarraLateral";
import { useState } from 'react'
import BarraTopo from "../../components/BarraTopo/BarraTopo";
import './Atraqui.scss'
import CrudUsuarios from "../../components/CrudUsuarios/CrudUsuarios"
import CrudFilaAtracacao from "../../components/CrudFilaAtracacao/CrudFilaAtracacao";

function Atraqui() {
    const [whichApp, setWhichApp] = useState('Início')

    return (
        <>
            <BarraLateral setWhichApp={setWhichApp}/>
            <div id="atraqui__container">
                <BarraTopo titulo={whichApp}/>
                {whichApp === 'Início' && <h1>INÍCIO</h1>}
                {/*whichApp === 'Navios Atracados' && <h1>NAVIOS ATRACADOS</h1>*/}
                {whichApp === 'Fila de Atracação' && <CrudFilaAtracacao />}
                {whichApp === 'Usuários' && <CrudUsuarios />}
                {whichApp === 'Requisições de Atracação' && <h1>REQUISIÇÕES DE ATRACAÇÃO</h1>}
                {whichApp === 'Ajuda' && <h1>AJUDA</h1>}
            </div>
        </>
    )
}

export default Atraqui;