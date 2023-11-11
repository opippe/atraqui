import DateTime from '../DateTime/DateTime';
import './BarraTopo.scss'

function BarraTopo(props) {
    return (
        <section id="barra-topo">
            <h3 className="titulo">{props.titulo}</h3>
            <span className='input-icon'>
                <input type="text" placeholder='Pesquisar'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <div className="usuario">
                <i class="fa-solid fa-bell"></i>
                <i className="fa-solid fa-circle-user"></i>
            </div>
        </section>
    )
}

export default BarraTopo;