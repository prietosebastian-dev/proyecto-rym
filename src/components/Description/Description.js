import './Description.css';

export default function Description({status,especie,genero,origen,setHide}) {

    const ocultar=()=>{
        setHide(true)
    }
    return(
        <div>
        <button className="btn btn-success btn-descript" onClick={ocultar}>X</button>
            <ul className="list-group d-flex">
                <li className="list-group-item fw-bold descript">Character Status:{status}</li>
                <li className="list-group-item fw-bold descript"><span className="d-flex flex-column">Species</span>{especie}</li>
                <li className="list-group-item fw-bold descript"><span className="d-flex flex-column">Origin</span>{origen}</li>
                <li className="list-group-item fw-bold descript"><span className="d-flex flex-column">Gender</span>{genero}</li>
            </ul>        
        </div>

    )
}